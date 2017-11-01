import { shallow } from 'enzyme';
import * as React from 'react';

import CVSkills from './skills';

describe('CVSkills', () => {

  it('renders without crashing', () => {
    shallow(<CVSkills skills={{}} />);
  });

});
