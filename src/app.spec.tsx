import * as React from 'react';
import { render, shallow } from 'enzyme';

import App from './app';

describe('App', () => {

  it('renders without crashing', () => {
    render(<App />);
  });

  it('has travis_build inside NavBar', () => {
    const wrapper = shallow(<App />, {});
    const img = wrapper.find('NavBar + img')
    expect(img).toHaveLength(1);
  });

});
