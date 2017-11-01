import { shallow } from 'enzyme';
import * as React from 'react';

import CVLanguages from './languages';

describe('CVLanguages', () => {

  it('renders without crashing', () => {
    shallow(<CVLanguages languages={{}} />);
  });

});
