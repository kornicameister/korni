import { shallow } from 'enzyme';
import * as React from 'react';

import CVWork from './work';

describe('CVWork', () => {

  it('renders without crashing', () => {
    shallow(<CVWork work={{}} />);
  });

});
