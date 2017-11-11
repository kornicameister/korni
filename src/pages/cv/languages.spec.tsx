import { shallow } from 'enzyme';
import * as React from 'react';

import CVLanguages from './languages';

describe('CVLanguages', () => {

  const language: any = {
    fluency: '',
    language: ''
  };

  it('renders without crashing', () => {
    shallow(<CVLanguages languages={[language]} />);
  });

});
