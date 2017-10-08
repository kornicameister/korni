import * as React from 'react';

import { shallow } from 'enzyme';

jest.mock('./routes', () => ({
  AsyncHome: () => '',
  AsyncAbout: () => '',
  AsyncNotFound: () => '',
}));

import App from './app';

describe('App', () => {

  it('renders without crashing', () => {
    shallow(<App />);
  });

});
