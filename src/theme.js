// Copyright 2017 @ kornicameister
// @flow weak

import { createMuiTheme } from 'material-ui/styles';

const DarkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const LightTheme = createMuiTheme({
  palette: {
    type: 'light'
  }
});

export { DarkTheme, LightTheme };
