/**
 * Created by kankan on 2019/8/18.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */

import React from 'react';
import {Cascader} from "antd";

const options = [
  {
    value: '山东省',
    label: '山东省',
    children: [
      {
        value: '济南市',
        label: '济南市',
        children: [
          {value: '天桥区', label: '天桥区'},
          {value: '市中区', label: '市中区'},
          {value: '历下区', label: '历下区'},
          {value: '历城区', label: '历城区'},
        ]
      },
      {
        value: '东营市',
        label: '东营市',
        children: [
          {value: '东城区', label: '东城区'},
          {value: '西城区', label: '西城区'}
        ],
      }
    ],
  },
  {
    value: '江苏省',
    label: '江苏省',
    disabled: true,
    children: [
      {
        value: '南京市', label: '南京市',
        children: [
          {value: '玄武区', label: '玄武区'},
          {value: '白下区', label: '白下区'},
          {value: '秦淮区', label: '秦淮区'},
          {value: '建邺区', label: '建邺区'},
          {value: '鼓楼区', label: '鼓楼区'},
          {value: '下关区', label: '下关区'},
          {value: '浦口区', label: '浦口区'},
          {value: '栖霞区', label: '栖霞区'},
          {value: '雨花台区', label: '雨花台区'},
          {value: '江宁区', label: '江宁区'},
          {value: '六合区', label: '六合区'},
        ],
      },
      {value: '徐州市', label: '徐州市'},
      {value: '无锡市', label: '无锡市'},
      {value: '昆山市', label: '昆山市'},
    ]
  }

];
const moment = require('moment');

/*function timer(){
  let data = response.data.data;
  //console.log(data);//打印测试
  let allData = [];
  for(let i=0;i<data.length;i++){
    allData.push(
      {
        name:data.name,//可能是其他字段 data.id
        value:data.value,
      }
    );
  }
  //console.log(allData);//打印测试

setTimeout(timer(),1000)
  return moment().format('YYYY-MM-DD HH:mm:ss');
}*/

function onChange(value) {
  console.log(value);

}

// Just show the latest item.
function displayRender(label) {
  return label[label.length - 1];
}

function timer() {
  setInterval(function () {
    return moment().format('YYYY-MM-DD HH:mm:ss');
  }, 1000)
}

class CascaderO extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      time: '',
    }
  }
  componentDidMount() {
    setInterval(()=>{
      this.setState({
        time: moment().format('YYYY-MM-DD HH:mm:ss'),
      })
    }, 1000)
  }


  render() {

    return (
      <div>
        <p>日期：{this.state.time}</p>
        <Cascader
          options={options}
          onChange={e => onChange(e)}
          placeholder="Please select"
          defaultValue={['山东省', '济南市', '历城区']}
          displayRender={displayRender}
          expandTrigger="hover"
          size="large"
          /*showSearch={function(inputValue,path){
            console.log(inputValue,path);
          }}*/
          showSearch={{
            filter: (inputValue, path) => {
              console.log(inputValue, path);
            },
            limit: 2,
            matchInputWidth: true,
            render: {
              function(inputValue, path) {
                return <p>kankan</p>
              }
            }
          }}
        />
      </div>
    )
  }
}


export default CascaderO;
