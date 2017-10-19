import * as React from 'react';
import { Container, Nav, NavLink, TabContent, TabPane } from 'reactstrap';
import { LoadableComponent } from 'react-loadable';
import * as classnames from 'classnames';

import {
  LoadableWakaTime,
  LoadableWhatPulse,
  LoadableKorni,
  LoadableGithub,
  LoadableGitlab
} from './stats_routes';
import './stats_page.css';

class StatTab {
  readonly id: string;
  readonly cmp: React.ComponentType & LoadableComponent;
  readonly label: string;
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
]

interface StatsPageState {
  activeTab: string
}
interface StatsPageProps { }

export default class StatsPage extends React.Component<StatsPageProps, StatsPageState> {

  constructor(props: StatsPageProps, state: StatsPageState) {
    super(props, state)

    this.state = {
      activeTab: TABS[0].id // use first tab as active one
    }

    this.toggleTab.bind(this);
    this.renderTabs.bind(this);
    this.renderTabsContent.bind(this);
  }

  toggleTab(tab: string) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  renderTabs() {
    let self = this;
    let state = self.state;

    return (
      <Nav className="stats-nav" tabs>
        {
          TABS.map((tab) => {
            return <NavLink
              key={tab.id}
              className={classnames({ active: state.activeTab === tab.id })}
              onClick={() => { self.toggleTab(tab.id); }}>
              {tab.label.toUpperCase()}
            </NavLink>
          })
        }
      </Nav>
    )
  }

  renderTabsContent() {
    let self = this;
    let state = self.state;

    return (
      <TabContent activeTab={state.activeTab}>
        {
          TABS.map((tab) => {
            return <TabPane key={tab.id} tabId={tab.id}>
              {React.createElement(tab.cmp, {})}
            </TabPane>
          })
        }
      </TabContent>
    )
  }

  render() {
    return (
      <Container>
        {this.renderTabs()}
        {this.renderTabsContent()}
      </Container>
    )
  }
}
