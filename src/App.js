import React from 'react';
import './App.css';
import DataInput from './components/dataInput/index'
import FormInput from './components/form/index'
import Parents from './components/parentChild/parent'
import Parent from './components/childParent/parents'
import ParentSon from './components/parentGrandSon/parents'
import Context from './components/context/Context';
import ContextO from './components/context/ContextO';
import ContextTest from './components/contextTest/app';
import 'antd/dist/antd.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        组件测试
      </header>
      <DataInput />
      <FormInput />
      <Parents name={"Parents"} />
      <Parent />
      <ParentSon />
      <Context />
      <ContextO />
      <ContextTest />
      <p>尾部的内容</p>
    </div>
  );
}

export default App;
