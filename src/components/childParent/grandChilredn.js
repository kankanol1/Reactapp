/**
 * Created by kankan on 2019/8/27.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
import React from 'react';
export default class Grandson extends React.Component{
  render(){
    return (
      <div>
        {this.props.name}：
        <select onChange={e=>this.props.handleSelect(e)}>
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
    )
  }
};
