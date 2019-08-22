/**
 * Created by kankan on 2019/8/22.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */

import React from 'react';

import {Form, Icon, Input, Button, Checkbox} from "antd";

const {Item} = Form;

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form:', values);
      }
    })
  };
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form layout="vertical" onSubmit={this.handleSubmit} className="login-form">
        <Item style={{margin:"0px"}}>
          {getFieldDecorator('username', {
            rules: [{
              required: true, message: '用户名'
            }],
          })(
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
              placeholder="用户名"
            />,
          )}
        </Item>
        <Item style={{margin:"0px"}}>
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '密码！！！'
            }],
          })(
            <Input
              type="password"
              prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
              placeholder="密码"
            />,
          )}
        </Item>
        <Item style={{margin:"0px"}}>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-from-forget" href="">Forget password</a>Or<a href="">register now!</a>
        </Item>
        <Button style={{width:"100%"}} type="primary" htmlType="submit" className="login-form-button">
          Login
        </Button>
      </Form>
    )
  }
}

const WrappedNormalLoginForm = Form.create({name:'冰原狼'})(NormalLoginForm);

export default WrappedNormalLoginForm;
