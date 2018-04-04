import * as React from 'react';
import * as LC from 'react-loadable';
import * as MUI from 'material-ui';
import SwipeableViews from 'react-swipeable-views';

import './stats_page.css';
import {
  LoadableGithub,
  LoadableGitlab,
  LoadableKorni,
  LoadableWakaTime,
  LoadableWhatPulse,
} from './stats_routes';

class StatTab {
  constructor(
    public id: number,
    public label: string,
    public cmp: React.ComponentType & LC.LoadableComponent,
  ) {
    this.id = id;
    this.cmp = cmp;
    this.label = label;
  }
}

const TABS: StatTab[] = [
  new StatTab(0, 'Korni', LoadableKorni),
  new StatTab(1, 'WakaTime', LoadableWakaTime),
  new StatTab(2, 'WhatPulse', LoadableWhatPulse),
  new StatTab(3, 'Gitlab', LoadableGitlab),
  new StatTab(4, 'Github', LoadableGithub),
];

interface IStatsPageState {
  activeTab: number;
}

export default class StatsPage extends React.Component<any, IStatsPageState> {
  constructor(props: any, state: IStatsPageState) {
    super(props, state);

    this.state = {
      activeTab: TABS[0].id, // use first tab as active one
    };
  }

  renderTabs = () => {
    return (
      <MUI.Tabs
        value={this.state.activeTab}
        onChange={(_, value) => this.setState({ activeTab: value })}
        indicatorColor="primary"
        textColor="primary"
        fullWidth
        centered>
        {TABS.map(tab => {
          return <MUI.Tab key={tab.id} label={tab.label.toUpperCase()} />;
        })}
      </MUI.Tabs>
    );
  };

  render() {
    return (
      <MUI.Grid container>
        {this.renderTabs()}
        <SwipeableViews
          index={this.state.activeTab}
          onChangeIndex={value => this.setState({ activeTab: value })}>
          {TABS.map(tab => {
            return (
              <MUI.Typography component="div" key={tab.id}>
                {React.createElement(tab.cmp, {})}
              </MUI.Typography>
            );
          })}
        </SwipeableViews>
      </MUI.Grid>
    );
  }
}
