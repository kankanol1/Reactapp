/**
 * Created by kankan on 2019/8/28.
 * E-mail: lidainzhong@gl-data.com
 * To: More pain, more gain.
 */
import React from 'react';
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
