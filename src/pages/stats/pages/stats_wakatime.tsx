import * as React from 'react';

import WakaTimeEditor from './wakatime/editor';
import WakaTimeLang from './wakatime/lang';
import WakaTimeOS from './wakatime/os';

const WakaTimeStats: React.SFC<any> = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'><WakaTimeLang /></div>
        <div className='col'><WakaTimeEditor /></div>
        <div className='col'><WakaTimeOS /></div>
      </div>
    </div >
  );
};

export default WakaTimeStats;
