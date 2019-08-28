/**
 * Created by kankan on 2019/8/27.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
import React from 'react';
import Childrens from './childrens';


export default class Parents extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      sex:''
    }
  };
  handleVal(event){
    // console.log(event.target.value);
    this.setState({
      username: event.target.value
    });
  };
  handleSelect(event){
    // console.log(event.target.value);
    this.setState({
      sex:event.target.value
    });
  };

  render(){
    return(
      <div>
        <h2>子组件向父组件传递值</h2>
        <p>用户名: {this.state.username}</p>
        <p>性别: {this.state.sex}</p>
        <h3>子组件</h3>
        <Childrens
          data={this.state}
          name="姓名"
          handleVal = {e=>this.handleVal(e)}
          handleSelect = {e=>this.handleSelect(e)}
        />
      </div>
    )
  }
}
