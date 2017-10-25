import { shallow } from 'enzyme';
import * as React from 'react';

jest.mock('./routes', () => ({
  AsyncAbout: () => '',
  AsyncHome: () => '',
  AsyncNotFound: () => ''
}));

import App from './app';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
