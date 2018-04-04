// Copyright 2017 @ kornicameister
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRouterDOM from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';
import 'react-transition-group';
import 'typeface-roboto';

import * as MUI from 'material-ui';

import App from './app';
import registerServiceWorker from './registerServiceWorker';
import { GoogleAnalytics } from './ga';

const ScrollToTop = ReactRouterDOM.withRouter<ReactRouterDOM.RouteComponentProps<{}>>(
  class ScrollToTop extends React.Component<ReactRouterDOM.RouteComponentProps<{}>> {
    componentDidUpdate(prevProps: ReactRouterDOM.RouteComponentProps<{}>) {
      if (this.props.location !== prevProps.location) {
        requestAnimationFrame(() => window.scrollTo(0, 0));
      }
    }

    render() {
      return this.props.children;
    }
  },
);

ReactDOM.render(
  <MUI.CssBaseline>
    <MUI.MuiThemeProvider
      theme={MUI.createMuiTheme({
        palette: {
          primary: MUI.colors.grey,
          secondary: MUI.colors.lightBlue,
        },
        direction: 'ltr',
      })}>
      <ReactRouterDOM.HashRouter basename="/" hashType="hashbang">
        <GoogleAnalytics>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </GoogleAnalytics>
      </ReactRouterDOM.HashRouter>
    </MUI.MuiThemeProvider>
  </MUI.CssBaseline>,
  document.getElementById('root'),
  () => {
    registerServiceWorker();
  },
);
