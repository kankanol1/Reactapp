/**
 * Created by kankan on 2019/8/22.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const {Item}= Form;

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
    console.log(this.props);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };


  render() {
    // console.log(this.props.form);
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Item validateStatus={usernameError ? 'error' : 'success'} help={usernameError || ''}>
          {getFieldDecorator('username', {rules: [{ required: true, message: '请输入用户名!'}],})
          (<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名"/>,)}
        </Item>
        <Item validateStatus={passwordError ? 'error' : 'success'} help={passwordError || ''}>
          {getFieldDecorator
          ('password', {rules: [{ required: true, message: '请输入密码!' }],})
          (<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码"/>,)
          }
        </Item>
        <Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            登录
          </Button>
        </Item>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

// WrappedHorizontalLoginForm 为 HorizontalLoginForm 类的实例化
export default WrappedHorizontalLoginForm;
