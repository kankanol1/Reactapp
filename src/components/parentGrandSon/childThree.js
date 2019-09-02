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


  constructor(props, context) {
    super(props);
    this.state = {
      data: props,
      context: context,
      items: [
        {name: '秦始皇', time: '2019-08-28'},
        {name: '诸葛亮', time: "2019-08-29"},
        {name: '孙尚香', time: "2019-08-30"},
        {name: '刘备', time: "2019-08-30"},
        {name: '曹操', time: "2019-08-30"},
      ],
      obj: {
        INT: '整型',
        LONG: '长整型',
        DOUBLE: '浮点型',
        STRING: '字符型',
        BOOLEAN: '布尔型',
        TIMESTAMP: '时间戳',
      },
      obj1: {
        name: 'kankan',
        age: 26,
        sport: 'basketball',
        time: '2019-08-28',
        state: '掉线',
      },
      obj2: {
        name: 'Fanny',
        age: 26,
        time: '2019-08-28',
        state: '在线',
      }
    }
  }

  render() {
    let obj = this.state.obj;
    var descriptor = Object.create(null);
    descriptor.value = 'kankan';
    let defineProperty = JSON.stringify(Object.defineProperty(obj, 'name', {
      writable: true,
      enumerable: true,
      configurable: true,
      value: 'kankan',
    }));

    let entries = JSON.stringify(Object.defineProperties(obj, {
      'property1': {
        value: true,
        writable: true
      },
      'property2': {
        value: 'Hello',
        writable: false
      }
    }));
    return (
      <div>
        <h1 style={this.state.context}>越组件传值</h1>
        <ul>
          {this.state.items && this.state.items.map((item, i) => (
            <li key={i}>{item.name}_{item.time}</li>
          ))}
        </ul>
        <p>Object:{JSON.stringify(this.state.obj)}</p>
        <p>Object.keys:{JSON.stringify(Object.keys(this.state.obj))}</p>
        <p>Object.values:{JSON.stringify(Object.values(this.state.obj))}</p>
        <p>obj1:{JSON.stringify(this.state.obj1)}</p>
        <p>obj2:{JSON.stringify(this.state.obj2)}</p>
        <p>Object.assign(obj1,obj2):{JSON.stringify(Object.assign(this.state.obj1, this.state.obj2))}</p>
        <p>Object.defineProperty(obj, prop, descriptor):{defineProperty}</p>
        <p>Object.defineProperties(obj, props):{}</p>

      </div>
    );
  }
}

export default childThree;
