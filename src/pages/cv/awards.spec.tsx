import { shallow } from 'enzyme';
import * as React from 'react';

import CVAwards from './awards';

describe('CVAwards', () => {
  it('renders without crashing', () => {
    shallow(<CVAwards awards={[]} />);
  });
});
