import { shallow } from 'enzyme';
import * as React from 'react';
import { LoadingComponentProps } from 'react-loadable';

import Spinner from './common/spinner';
import RouteLoader from './router';

describe('RouteLoader', () => {
  it('renders without crashing', () => {
    const props: LoadingComponentProps = {
      error: false,
      isLoading: false,
      timedOut: false,
      pastDelay: false,
    };
    shallow(<RouteLoader {...props} />);
  });

  it('renders timed_out', () => {
    const props: LoadingComponentProps = {
      error: false,
      isLoading: true,
      pastDelay: false,
      timedOut: true,
    };

    const wrapper = shallow(<RouteLoader {...props} />);
    const div = wrapper.find('div');

    expect(div).toHaveLength(1);
    expect(div.get(0).props.className).toEqual('alert alert-warning');
  });

  it('renders error', () => {
    const props: LoadingComponentProps = {
      error: true,
      isLoading: false,
      pastDelay: false,
      timedOut: false,
    };

    const wrapper = shallow(<RouteLoader {...props} />);
    const div = wrapper.find('div');

    expect(div).toHaveLength(1);
    expect(div.get(0).props.className).toEqual('alert alert-danger');
  });

  it('renders loading if delay exceeded', () => {
    // component still loading but before timed_out
    const props: LoadingComponentProps = {
      error: false,
      isLoading: true,
      pastDelay: true,
      timedOut: false,
    };

    const wrapper = shallow(<RouteLoader {...props} />);
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it('renders nothing if component loaded', () => {
    // loading but before delay
    const props: LoadingComponentProps = {
      error: false,
      isLoading: true,
      pastDelay: false,
      timedOut: false,
    };

    const wrapper = shallow(<RouteLoader {...props} />);
    const div = wrapper.find('div');

    expect(div).toHaveLength(0);
  });
});
