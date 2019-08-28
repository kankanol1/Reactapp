
/**
 * Created by kankan on 2019/8/18.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */

import React from 'react';
import Children from './children'

class Parent extends React.Component{
constructor(props){
  super(props);
  this.state= {
    data:props
  }
}
  render(){
  // console.log(this.props.data,this.state.data);
    return (
      <div>
        <h2>父组件向子组件传递值</h2>
        {this.props.data}
        <Children data={{name:"kankan",sport:'basketball',data:this.state}}>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
        </Children>
      </div>
    )
  }
}

export default Parent;
