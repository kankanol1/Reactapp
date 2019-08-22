import React from 'react';
import './App.css';
import DataInput from './components/dataInput/index'
import FormInput from './components/form/index'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        组件测试
      </header>
      <DataInput />
      <FormInput />

      <p>尾部</p>
    </div>
  );
}

export default App;
