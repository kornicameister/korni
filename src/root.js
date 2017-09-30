// @flow weak

import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

import { DarkTheme } from './theme';
import App from './app';

const Root = () => (
  <MuiThemeProvider theme={DarkTheme}>
    <App />
  </MuiThemeProvider>
);

export default Root;
