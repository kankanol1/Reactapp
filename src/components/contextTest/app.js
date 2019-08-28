/**
 * Created by kankan on 2019/8/28.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
import React from 'react';
import {Input} from "antd";
import {ThemeContext, themes} from './context';
import ThemedButton from './button';

// An intermediate component that uses the ThemedButton
class Toolbar extends React.Component  {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    const {changeTheme} = this.props;
    return (
      <div>
        <h2>父组件</h2>
        <ThemedButton onClick={changeTheme}>
          Change Theme
        </ThemedButton>
      </div>

    );
  }

}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
