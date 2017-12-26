// Copyright 2017 @ kornicameister
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

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

ReactDOM.render(
  <Router basename="/" hashType="hashbang">
    <GoogleAnalytics>
      <App />
    </GoogleAnalytics>
  </Router>,
  document.getElementById('root'),
  () => {
    registerServiceWorker();
  },
);
