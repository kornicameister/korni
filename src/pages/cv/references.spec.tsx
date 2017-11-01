import { shallow } from 'enzyme';
import * as React from 'react';

import CVReferences from './references';

describe('CVReferences', () => {

  it('renders without crashing', () => {
    shallow(<CVReferences references={{}} />);
  });

});
