// Copyright 2017 @ kornicameister
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
