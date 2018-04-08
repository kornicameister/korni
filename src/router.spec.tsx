import { shallow } from 'enzyme';
import * as React from 'react';

import Spinner from './common/spinner';
import RouteLoader from './router';

describe('RouteLoader', () => {
  it('renders without crashing', () => {
    const props: any = {
      error: false,
      isLoading: false,
      timedOut: false,
    };
    shallow(<RouteLoader {...props} />);
  });

  it('renders timed_out', () => {
    const props: any = {
      error: false,
      isLoading: true,
      pastDelay: false,
      timedOut: true,
    };

    const wrapper = shallow(<RouteLoader {...props} />);
    const div = wrapper.find('.container-fluid');

    expect(div).toHaveLength(1);
    expect(div.children().get(0).props.className).toEqual('alert alert-warning');
  });

  it('renders error', () => {
    const props: any = {
      error: true,
      isLoading: false,
      pastDelay: false,
      timedOut: false,
    };

    const wrapper = shallow(<RouteLoader {...props} />);
    const div = wrapper.find('.container-fluid');

    expect(div).toHaveLength(1);
    expect(div.children().get(0).props.className).toEqual('alert alert-danger');
  });

  it('renders loading if delay exceeded', () => {
    // component still loading but before timed_out
    const props: any = {
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
    const props: any = {
      error: false,
      isLoading: true,
      pastDelay: false,
      timedOut: false,
    };

    const wrapper = shallow(<RouteLoader {...props} />);
    const div = wrapper.find('.container-fluid');

    expect(div).toHaveLength(0);
  });
});
