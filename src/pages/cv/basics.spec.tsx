import { shallow } from 'enzyme';
import * as React from 'react';

import CVBasics from './basics';

describe('CVBasics', () => {

  it('renders without crashing', () => {
    shallow(<CVBasics basics={{}} />);
  });

});
