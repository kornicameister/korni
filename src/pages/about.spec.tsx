import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AboutPage from './about';

describe('AboutPage', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AboutPage />, div);
  });

  it('contains fluid jumbotron as top-component', () => {
    // TODO
  });

  it('has image with avatar', () => {
    // TODO
  });

});
