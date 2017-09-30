// Copyright 2017 @ kornicameister
// @flow weak
import 'typeface-roboto';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Root from './root';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
