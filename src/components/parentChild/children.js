/**
 * Created by kankan on 2019/8/27.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
import React from 'react';

class Children extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      kankan:props,
    }
  }

  render(){
    // console.log(this.state);
    return (
      <div>
        <div>
          <h3>孩子组件 接受父级参数:{this.props.data.name},{this.props.data.sport}</h3>
          <h3>孩子组件 接受祖父参数:{this.props.data.data.data.name}</h3>
        </div>

      </div>
    );
  }
}

export default Children;
