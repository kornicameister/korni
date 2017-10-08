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

  describe('travis_badge', () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('has badge inside </a>', () => {
      let img = wrapper.find('a#travis_badge img');
      expect(img).toHaveLength(1);
    });

    it('has badge with correct src', () => {
      let img = wrapper.find('a#travis_badge img');
      expect(img).toHaveLength(1);
      expect(img.get(0).props.src).toEqual('https://travis-ci.org/kornicameister/korni.svg?branch=master');
    });

    it('has badge inside </a> with correct href', () => {
      let a = wrapper.find('a#travis_badge');
      expect(a).toHaveLength(1);
      expect(a.get(0).props.href).toEqual('https://travis-ci.org/kornicameister/korni');
    });

  });

});
