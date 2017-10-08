import * as React from 'react';

import { shallow } from 'enzyme';
import {
  Jumbotron,
} from 'reactstrap';

import StatsPage from './stats_page';

describe('StatsPage', () => {

  it('renders without crashing', () => {
    shallow(<StatsPage />);
  });

  it('contains fluid jumbotron as top-component', () => {
    const wrapper = shallow(<StatsPage />);
    const el = shallow(<Jumbotron fluid></Jumbotron>)
    expect(wrapper.first().type()).toEqual(el.type());
  });

});
