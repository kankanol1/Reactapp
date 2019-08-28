/**
 * Created by kankan on 2019/8/27.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
import React from 'react';
import ChildTwo from './childTwo'
import PropTypes from 'prop-types'

// const KanContext = React.createContext({name:"kankan",color:"green"});
class Parents extends React.Component{
  static childContextTypes = {
    color: PropTypes.string,
  };
  getChildContext () {
    return {
      color: "red",
    }
  };

  render(){
    return (
        <ChildTwo />
    )
  }
}
export default Parents;
