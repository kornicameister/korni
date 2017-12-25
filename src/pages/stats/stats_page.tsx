import * as classnames from 'classnames';
import * as React from 'react';
import { LoadableComponent } from 'react-loadable';
import { Container, Nav, NavLink, TabContent, TabPane } from 'reactstrap';

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
      <Container>
        {this.renderTabs()}
        {this.renderTabsContent()}
      </Container>
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
      <Nav className="stats-nav" tabs>
        {TABS.map(tab => {
          return (
            <NavLink
              key={tab.id}
              className={classnames({
                active: this.state.activeTab === tab.id,
              })}
              onClick={() => {
                this.toggleTab(tab.id);
              }}>
              {tab.label.toUpperCase()}
            </NavLink>
          );
        })}
      </Nav>
    );
  }

  private renderTabsContent() {
    return (
      <TabContent activeTab={this.state.activeTab}>
        {TABS.map(tab => {
          return (
            <TabPane key={tab.id} tabId={tab.id}>
              {React.createElement(tab.cmp, {})}
            </TabPane>
          );
        })}
      </TabContent>
    );
  }
}
