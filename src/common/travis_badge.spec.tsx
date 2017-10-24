import { shallow } from 'enzyme';
import * as React from 'react';

import TravisBadge from './travis_badge';

describe('TravisBadge', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<TravisBadge />);
  });

  it('has badge inside </a>', () => {
    const img = wrapper.find('a#travis_badge img');
    expect(img).toHaveLength(1);
  });

  it('has badge with correct src', () => {
    const img = wrapper.find('a#travis_badge img');
    expect(img).toHaveLength(1);
    expect(img.get(0).props.src).toEqual(
      'https://travis-ci.org/kornicameister/korni.svg?branch=master'
    );
  });

  it('has badge inside </a> with correct href', () => {
    const a = wrapper.find('a#travis_badge');
    expect(a).toHaveLength(1);
    expect(a.get(0).props.href).toEqual(
      'https://travis-ci.org/kornicameister/korni'
    );
  });
});
