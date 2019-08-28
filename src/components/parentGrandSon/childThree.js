/**
 * Created by kankan on 2019/8/27.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
import React from 'react';
import PropTypes from 'prop-types'
class childThree extends React.Component {
  static contextTypes = {
    color: PropTypes.string
  };
  constructor(props,context){
    super(props);
    this.state= {
      
      data:props,
      context:context,
    }
  }
  render() {
    console.log(this.state);
    return <h1 style={this.state.context}>越组件传值</h1>
  }
}

export default childThree;
