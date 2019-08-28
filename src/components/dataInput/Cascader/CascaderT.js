/**
 * Created by kankan on 2019/8/18.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */

import  React from 'react';
import { Cascader } from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];

class LazyOptions extends React.Component {
  state = {
    options,
  };
  onChange = (value, selectedOptions) => {
    // console.log(value, selectedOptions);
  };

  loadData = selectedOptions => {
    // console.log(selectedOptions);
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      this.setState({
        options: [...this.state.options],
      });
    }, 1000);
  };

  render() {
    return (
      <Cascader
        options={this.state.options}
        // loadData={this.loadData}
        onChange={this.onChange}
        changeOnSelect={true}
        size="large"
       /* displayRender={function(label,selectedOptions){
          // console.log(label,selectedOptions);
          return <p>{selectedOptions}</p>
        }}*/
        notFoundContent="Not found"

        expandTrigger="click"
        fieldNames={{
          label:"label",
          value:"value",
          children:"childrens.js"
        }}
        showSearch={function (inputValue,path) {
          console.log(inputValue,path);
        }}
      />
    );
  }
}

export default LazyOptions;
