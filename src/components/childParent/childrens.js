/**
 * Created by kankan on 2019/8/27.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
import React from 'react';
import Grandson from './grandChilredn'

export default class Childrens extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:props
    }
  }
  render(){
    // console.log(this.props,this.state);
    return (
      <div>
        {this.props.name}：<input onChange={e=>this.props.handleVal(e)}/>
        <p>子组件传入父组件再传入子组件：{this.props.data.sex}</p>
        <h3>孙子组件</h3>
        <Grandson name="性别" handleSelect={this.props.handleSelect}/>
      </div>
    )
  }
}
