import { shallow } from 'enzyme';
import * as React from 'react';

import CVPage from './cv';

describe('CVPage', () => {
  it('renders without crashing', () => {
    shallow(<CVPage resume={{}} />);
  });
});
