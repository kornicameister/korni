import { shallow } from 'enzyme';
import * as React from 'react';

import CVInterests from './interests';

describe('CVInterests', () => {
  it('renders without crashing', () => {
    shallow(<CVInterests interests={[]} />);
  });
});
