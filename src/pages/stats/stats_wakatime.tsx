import * as React from 'react';

import BaseStats from './stats_base_component';

export default class WakaTimeStats extends BaseStats {

  renderLabel() {
    return <span>WakaTime</span>
  }

  renderContent() {
    return (
      <a href="https://wakatime.com">
        <img src="https://wakatime.com/share/@8bae79b2-e7a7-4349-8a06-994ca85dc2c9/e02c9efc-389c-44bc-b700-61df68d432bf.png" className="img-fluid" />
      </a>
    )
  }
}
