import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AboutPage from './about';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutPage />, div);
});
