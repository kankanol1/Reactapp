/**
 * Created by kankan on 2019/8/27.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
import React from 'react';
import PropTypes from 'prop-types';
import ChildTwo from './childTwo';

const {Input} = React;



class ChildOne extends React.Component {
/*  static contextTypes = {
    color:PropTypes.string
  };*/

  render() {
    // const {color} = this.context;
    return (
      <div>
        <h1 style={{color:'green'}}>标题</h1>
        {/*<h1 style={{color:'red'}}>标题</h1>*/}
        {/*<h1 style={{color:color}}>标题</h1>*/}
        {/*<Input onChange={e=>this.props.handleChange(e)}/>*/}
        <ChildTwo />
      </div>

    )
  }
}

/*ChildOne.contextProps = {
  color:PropTypes.string
};*/
export default ChildOne;
