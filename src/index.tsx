// Copyright 2017 @ kornicameister
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-transition-group';
import 'typeface-roboto';

import App from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router basename='/' hashType='hashbang'>
    <App />
  </Router>,
  document.getElementById('root'),
  () => {
    registerServiceWorker();
  }
);
