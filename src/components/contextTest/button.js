/**
 * Created by kankan on 2019/8/28.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
import React from 'react';
import {ThemeContext} from './context';
import {Button} from "antd";

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context; //越级传递
    console.log(props);
    return (
      <Button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
