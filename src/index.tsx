// Copyright 2017 @ kornicameister
import 'typeface-roboto';
import 'react-transition-group';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router basename="/" hashType="hashbang">
    <App />
  </Router>,
  document.getElementById('root'),
  () => { registerServiceWorker() }
);

