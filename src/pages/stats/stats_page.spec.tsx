import * as React from 'react';

import { shallow } from 'enzyme';
import { TabPane, NavLink, TabContent } from 'reactstrap';

jest.mock('./stats_routes', () => ({
  LoadableWakaTime: () => '',
  LoadableWhatPulse: () => '',
  LoadableKorni: () => '',
  LoadableGithub: () => '',
  LoadableGitlab: () => ''
}));
import {
  LoadableWakaTime,
  LoadableWhatPulse,
  LoadableKorni,
  LoadableGithub,
  LoadableGitlab
} from './stats_routes';

import StatsPage from './stats_page';

describe('StatsPage', () => {
  it('renders without crashing', () => {
    shallow(<StatsPage />);
  });

  describe('logic', () => {
    let el: any;

    beforeEach(() => {
      el = shallow(<StatsPage />);
    });
    afterEach(() => {
      el = null;
    });

    it('toggling tab changes state', () => {
      let label: string = 'wakatime';
      el
        .find(NavLink)
        .findWhere((n: any) => {
          return n.key() == label;
        })
        .simulate('click');
      expect(el.state().activeTab).toEqual('wakatime');
    });
    it('toggling tab changes active tab', () => {
      let label: string = 'wakatime';

      // ensure that wakatime, as non-first tab is not active
      let c = el.find(TabPane).findWhere((n: any) => {
        return (
          n.key() == label && n.parent(TabContent).props().activeTab == label
        );
      });
      expect(c).toHaveLength(0);

      // simulate clicking on it
      el
        .find(NavLink)
        .findWhere((n: any) => {
          return n.key() == label;
        })
        .simulate('click');

      // ensure it is there and parent TabContent knows about it
      c = el.find(TabPane).findWhere((n: any) => {
        return (
          n.key() == label && n.parent(TabContent).props().activeTab == label
        );
      });
      expect(c).toHaveLength(1);
    });
  });

  describe('view', () => {
    let el: any;

    beforeEach(() => {
      el = shallow(<StatsPage />);
    });
    afterEach(() => {
      el = null;
    });

    it('contains valid numbers of tabs', () => {
      expect(el.find(TabPane)).toHaveLength(5);
    });
    it('contains valid numbers of link', () => {
      expect(el.find(NavLink)).toHaveLength(5);
    });

    [
      'wakatime',
      'github',
      'gitlab',
      'korni',
      'whatpulse'
    ].forEach((label: string) => {
      it(`contains ${label}`, () => {
        let foundPane = el.find(TabPane).findWhere((n: any) => {
          return n.props().tabId == label;
        });
        let foundLink = el.find(NavLink).findWhere((n: any) => {
          return n.key() == label;
        });
        expect(foundPane).toHaveLength(1);
        expect(foundLink).toHaveLength(1);
      });
      it(`each pane contains appropriate loadable for ${label}`, () => {
        let foundCmp = el.find(TabPane).findWhere((n: any) => {
          switch (label) {
            case 'wakatime':
              return (
                n
                  .children()
                  .first()
                  .type() == LoadableWakaTime
              );
            case 'github':
              return (
                n
                  .children()
                  .first()
                  .type() == LoadableGithub
              );
            case 'gitlab':
              return (
                n
                  .children()
                  .first()
                  .type() == LoadableGitlab
              );
            case 'whatpulse':
              return (
                n
                  .children()
                  .first()
                  .type() == LoadableWhatPulse
              );
            case 'korni':
              return (
                n
                  .children()
                  .first()
                  .type() == LoadableKorni
              );
            default:
              return false;
          }
        });
        expect(foundCmp).toHaveLength(1);
      });
    });
  });
});
