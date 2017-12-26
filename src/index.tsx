// Copyright 2017 @ kornicameister
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRouterDOM from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.css';
import 'react-transition-group';
import 'typeface-roboto';

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
  <ReactRouterDOM.HashRouter basename="/" hashType="hashbang">
    <GoogleAnalytics>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </GoogleAnalytics>
  </ReactRouterDOM.HashRouter>,
  document.getElementById('root'),
  () => {
    registerServiceWorker();
  },
);
