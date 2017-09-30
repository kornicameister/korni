// @flow weak

import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

import { DarkTheme } from './theme';
import App from './app';

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider theme={DarkTheme}>
        <App />
      </MuiThemeProvider>
    );
  }
}

export default Root;
