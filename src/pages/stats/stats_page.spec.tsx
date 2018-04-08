import { shallow } from 'enzyme';
import * as React from 'react';

jest.mock('./stats_routes', () => ({
  LoadableGithub: () => '',
  LoadableGitlab: () => '',
  LoadableKorni: () => '',
  LoadableWakaTime: () => '',
  LoadableWhatPulse: () => '',
}));
import {
  LoadableGithub,
  LoadableGitlab,
  LoadableKorni,
  LoadableWakaTime,
  LoadableWhatPulse,
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
      const label: string = 'wakatime';
      el
        .find('.nav-link')
        .findWhere((n: any) => n.key() === label)
        .simulate('click');
      expect(el.state().activeTab).toEqual('wakatime');
    });
    it('toggling tab changes active tab', () => {
      const label: string = 'wakatime';

      // ensure that wakatime, as non-first tab is not active
      let c = el.find('.tab-pane show active').findWhere((n: any) => {
        return n.key() === label;
      });
      expect(c).toHaveLength(0);

      // simulate clicking on it
      el
        .find('.nav-link')
        .findWhere((n: any) => {
          return n.key() === label;
        })
        .simulate('click');

      // ensure it is there and parent <div className="tab-content"/> knows about it
      c = el.find('.tab-pane').findWhere((n: any) => {
        return n.key() === label;
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
      expect(el.find('.tab-pane')).toHaveLength(5);
    });
    it('contains valid numbers of link', () => {
      expect(el.find('.nav-link')).toHaveLength(5);
    });

    ['wakatime', 'github', 'gitlab', 'korni', 'whatpulse'].forEach((label: string) => {
      it(`contains ${label}`, () => {
        const foundPane = el.find('.tab-pane').findWhere((n: any) => {
          return n.key() === label;
        });
        const foundLink = el.find('.nav-link').findWhere((n: any) => {
          return n.key() === label;
        });
        expect(foundPane).toHaveLength(1);
        expect(foundLink).toHaveLength(1);
      });
      it(`each pane contains appropriate loadable for ${label}`, () => {
        const foundCmp = el.find('.tab-pane').findWhere((n: any) => {
          switch (label) {
            case 'wakatime':
              return (
                n
                  .children()
                  .first()
                  .type() === LoadableWakaTime
              );
            case 'github':
              return (
                n
                  .children()
                  .first()
                  .type() === LoadableGithub
              );
            case 'gitlab':
              return (
                n
                  .children()
                  .first()
                  .type() === LoadableGitlab
              );
            case 'whatpulse':
              return (
                n
                  .children()
                  .first()
                  .type() === LoadableWhatPulse
              );
            case 'korni':
              return (
                n
                  .children()
                  .first()
                  .type() === LoadableKorni
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
