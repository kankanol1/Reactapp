import React from 'react'
import {Button, Input} from 'antd';
import AutoInput from './AutoComplete/AutoInput';
import AutoSearch from './AutoComplete/AutoSearch';
import AutoItems from './AutoComplete/AutoItems';

class Complete extends React.Component {
  constructor(props) {
    super(props);
    const {info} = props;

    this.state = {
      info:info,
    }
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <h4>AutoComplete</h4>
        <p>姓名: {this.state.info.name}, 篮球: {this.state.info.sport}.</p>
        <Input style={{width: "200px"}}/>
        <Button type="primary">primary</Button>
        <br/>
        <AutoInput/><br/>
        <AutoSearch/><br/>
        <AutoItems/><br/>
        <AutoItems/><br/>
      </div>
    );
  }
}

export default Complete;
