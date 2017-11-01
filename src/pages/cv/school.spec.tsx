import { shallow } from 'enzyme';
import * as React from 'react';

import CVSchool from './school';

describe('CVSchool', () => {

  it('renders without crashing', () => {
    shallow(<CVSchool school={{}} />);
  });

});
