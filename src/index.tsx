// Copyright 2017 @ kornicameister
import 'typeface-roboto';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './app';
import registerServiceWorker from './registerServiceWorker';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// css

ReactDOM.render(
  <Router><App></App></Router>,
  document.getElementById('root'),
  registerServiceWorker
);
