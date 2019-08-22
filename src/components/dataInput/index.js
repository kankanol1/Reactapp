import React from 'react'
import AuoCompleteTest from './AutoCompleteTest';
import Cascader from './Cascader';
import './index.css';

class DataInput extends React.Component {
  render() {
    return (
     <div className="data-input">
       <h3>数据录入</h3>

       <AuoCompleteTest info={{name:'kankan',sport:'Basketball'}} />
       <Cascader />
     </div>
    );
  }
}
export default DataInput;
