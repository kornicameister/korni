import { shallow } from 'enzyme';
import * as React from 'react';

import CVHelp from './help';

describe('CVHelp', () => {
  it('renders without crashing', () => {
    shallow(<CVHelp />);
  });
});
