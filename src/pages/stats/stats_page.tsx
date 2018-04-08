import classnames from 'classnames';
import * as React from 'react';
import { LoadableComponent } from 'react-loadable';

import './stats_page.css';
import {
  LoadableGithub,
  LoadableGitlab,
  LoadableKorni,
  LoadableWakaTime,
  LoadableWhatPulse,
} from './stats_routes';

class StatTab {
  public readonly id: string;
  public readonly cmp: React.ComponentType & LoadableComponent;
  public readonly label: string;
  constructor(id: string, label: string, cmp: React.ComponentType & LoadableComponent) {
    this.id = id;
    this.cmp = cmp;
    this.label = label;
  }
}

const TABS: StatTab[] = [
  new StatTab('korni', 'Korni', LoadableKorni),
  new StatTab('wakatime', 'WakaTime', LoadableWakaTime),
  new StatTab('whatpulse', 'WhatPulse', LoadableWhatPulse),
  new StatTab('gitlab', 'Gitlab', LoadableGitlab),
  new StatTab('github', 'Github', LoadableGithub),
];

interface IStatsPageState {
  activeTab?: string;
}

export default class StatsPage extends React.Component<any, IStatsPageState> {
  constructor(props: any, state: IStatsPageState) {
    super(props, state);

    this.state = {
      activeTab: TABS[0].id, // use first tab as active one
    };

    this.toggleTab.bind(this);
    this.renderTabs.bind(this);
    this.renderTabsContent.bind(this);
  }

  public render() {
    return (
      <div className="container">
        {this.renderTabs()}
        {this.renderTabsContent()}
      </div>
    );
  }

  private toggleTab(tab: string) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  private renderTabs() {
    return (
      <div className="nav nav-tabs nav-tabs-justified stats-nav">
        {TABS.map(tab => {
          return (
            <div
              key={tab.id}
              className={classnames('nav-link', {
                active: this.state.activeTab === tab.id,
              })}
              onClick={() => {
                this.toggleTab(tab.id);
              }}>
              {tab.label.toUpperCase()}
            </div>
          );
        })}
      </div>
    );
  }

  private renderTabsContent() {
    return (
      <div className="tab-content">
        {TABS.map(tab => {
          return (
            <div
              key={tab.id}
              className={classnames('tab-pane fade', {
                'show active': tab.id === this.state.activeTab,
              })}>
              {React.createElement(tab.cmp, {})}
            </div>
          );
        })}
      </div>
    );
  }
}
