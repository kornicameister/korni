import { shallow } from 'enzyme';
import * as React from 'react';

import CVSchool from './school';

describe('CVSchool', () => {
  const school = {
    studyType: '',
    gpa: '',
    startDate: '',
    endDate: '',
  };

  it('renders without crashing', () => {
    shallow(<CVSchool school={[school]} />);
  });
});
