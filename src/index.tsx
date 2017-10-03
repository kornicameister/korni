// Copyright 2017 @ kornicameister
import 'typeface-roboto';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router5';

import Root from './root';
import createRouter from './create-router';
import registerServiceWorker from './registerServiceWorker';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// bootstrap

// css
import './index.css';
// css

const router = createRouter(true);
const app = (
  <RouterProvider router={router}>
    <Root />
  </RouterProvider>
);
const placeholder = document.getElementById('root');

router.start(() => {
  ReactDOM.render(app, placeholder);
});
registerServiceWorker();
