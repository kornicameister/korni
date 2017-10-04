// Copyright 2017 @ kornicameister
import 'typeface-roboto';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app';
import registerServiceWorker from './registerServiceWorker';

// css
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// css

ReactDOM.render(
  <Router basename="/">
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker()
