import { shallow } from 'enzyme';
import * as React from 'react';
import { Jumbotron } from 'reactstrap';

import AboutPage from './about';

describe('AboutPage', () => {
  it('renders without crashing', () => {
    shallow(<AboutPage />);
  });

  it('contains fluid jumbotron as top-component', () => {
    const wrapper = shallow(<AboutPage />);
    const el = shallow(<Jumbotron fluid />);
    expect(wrapper.first().type()).toEqual(el.type());
  });

  it('has image with avatar', () => {
    const wrapper = shallow(<AboutPage />);
    const img = wrapper.find('img');

    const avatarSrc: string =
      'https://s.gravatar.com/avatar/140db4c0a9767838be5a5289ad78eca6?s=120';
    const avatarAlt: string = 'kornicameister gravatar';

    expect(img).toHaveLength(1);

    expect(img.get(0).props.src).toEqual(avatarSrc);
    expect(img.get(0).props.alt).toEqual(avatarAlt);
  });

  it('has 4 paragraphs with content', () => {
    const wrapper = shallow(<AboutPage />);
    const ps = wrapper.find('p');
    expect(ps).toHaveLength(4);
  });
});
