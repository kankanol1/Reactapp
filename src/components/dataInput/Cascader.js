import React from 'react'
import CascaderO from './Cascader/CascaderO'
import CascaderT from './Cascader/CascaderT'
// import CascaderF from './Cascader/CascaderF'

class Complete extends React.Component {

  render() {
    return (
      <div>
        <h4>Cascader</h4>
        <CascaderO />
        <CascaderT />
        {/*<CascaderF />*/}
      </div>
    );
  }
}

export default Complete;
