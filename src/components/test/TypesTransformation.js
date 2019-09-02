import React from 'react';
import { Modal, message, Select } from 'antd';
import { addTransformation } from '@/services/datapro/pipelineAPI';
import ConfigurationTable from '@/components/JsonSchemaForm/UI/ConfigurationTable';
import WithSchema from './WithSchema';
import XInputSelect from '@/components/XInputSelect';

const presetTypes = {
  INT: '整型',
  LONG: '长整型',
  DOUBLE: '浮点型',
  STRING: '字符型',
  BOOLEAN: '布尔型',
  TIMESTAMP: '时间戳',
};
// eslint-disable-next-line compat/compat
const presetPatterns = Object.values(presetTypes);
export default class TypesTransformation extends React.PureComponent {
  state = {
    schema: [],
    formData: [],
    adding: false,
  };

  handleOk() {
    const { id, opId, onOk } = this.props;
    this.setState({ adding: true });
    // submit
    addTransformation({
      projectId: id,
      id: opId,
      config: {
        type: 'TypesTransformation',
        config: {
          items: this.state.formData.map(item => {
            return {
              field: item.field,
              castType: Object.keys(presetTypes)[presetPatterns.indexOf(item.castType)],
            };
          }),
        },
      },
    }).then(response => {
      if (response) {
        if (response.success) {
          message.info('添加成功');
          onOk();
        } else {
          message.error(`添加失败:${response.message}，请重试`);
        }
      }
    });
  }

  renderForm() {
    const { schema, formData } = this.state;
    return (
      <ConfigurationTable
        canAdd={
          schema && formData.length < schema.filter(i => i.type.toLowerCase() === 'string').length
        }
        canDelete
        onChange={v => {
          this.setState({
            formData: v,
          });
        }}
        data={formData}
        columns={[
          {
            name: 'field',
            title: '列',
            render: (v, item, onChange) => (
              <Select placeholder="请选择" onChange={e => onChange(e)} value={v}>
                {schema.map(i => (
                  <Select.Option
                    key={i.name}
                    value={i.name}
                    disabled={
                      formData.filter(s => s.fields === i.name).length > 0 ||
                      i.type.toLowerCase() !== 'string'
                    }
                  >
                    {`${i.name} (${i.type})`}
                  </Select.Option>
                ))}
              </Select>
            ),
            span: 11,
          },
          {
            name: 'castType',
            title: '类型',
            render: (v, item, onChange) => (
              <XInputSelect
                options={presetPatterns}
                defaultValue={v}
                value={v}
                onChange={nv => onChange(nv)}
              />
            ),
            span: 11,
          },
        ]}
      />
    );
  }

  render() {
    const { onCancel } = this.props;
    return (
      <Modal
        title="类型转换"
        visible
        onOk={() => this.handleOk()}
        onCancel={onCancel}
        okButtonProps={{ loading: this.state.adding }}
      >
        <WithSchema
          {...this.props}
          onLoad={schema =>
            this.setState({
              schema,
              formData: (this.props.columns || []).map(i => ({ fields: i, names: i })),
            })
          }
        >
          {this.renderForm()}
        </WithSchema>
      </Modal>
    );
  }
}
