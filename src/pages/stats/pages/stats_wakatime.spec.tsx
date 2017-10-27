import { shallow } from 'enzyme';
import * as React from 'react';

import WakaTimeStats from './stats_wakatime';
import WakaTimeActivity from './wakatime/activity';
import WakaTimeEditor from './wakatime/editor';
import WakaTimeLang from './wakatime/lang';
import WakaTimeOS from './wakatime/os';

describe('WakaTimeStats', () => {

  it('should render without errors', () => {
    shallow(<WakaTimeStats />);
  });

  [WakaTimeEditor, WakaTimeLang, WakaTimeOS, WakaTimeActivity].forEach((cmp) => {
    let el: any;

    beforeEach(() => { el = shallow(<WakaTimeStats />); });

    it(`should contain '${cmp.name}' stats component`, () => {
      expect(el.find(cmp)).toHaveLength(1);
    });
  });

});