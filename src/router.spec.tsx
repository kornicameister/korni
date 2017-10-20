import * as React from 'react';
import { shallow } from 'enzyme';

import RouteLoader from './router';
import Spinner from './common/spinner';


describe('RouteLoader', () => {
  it('renders without crashing', () => {
    let props: any = {
      isLoading: false,
      timedOut: false,
      error: false
    }
    shallow(<RouteLoader {...props} />);
  });

  it('renders timed_out', () => {
    let props: any = {
      isLoading: true,
      timedOut: true,
      error: false,
      pastDelay: false
    }

    const wrapper = shallow(<RouteLoader {...props} />);
    const div = wrapper.find('div');

    expect(div).toHaveLength(1);
    expect(div.get(0).props.className).toEqual('alert alert-warning')
  });

  it('renders error', () => {
    let props: any = {
      isLoading: false,
      timedOut: false,
      error: true,
      pastDelay: false
    }

    const wrapper = shallow(<RouteLoader {...props} />);
    const div = wrapper.find('div');

    expect(div).toHaveLength(1);
    expect(div.get(0).props.className).toEqual('alert alert-danger')
  });

  it('renders loading if delay exceeded', () => {
    // component still loading but before timed_out
    let props: any = {
      isLoading: true,
      timedOut: false,
      error: false,
      pastDelay: true
    }

    const wrapper = shallow(<RouteLoader {...props} />);
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it('renders nothing if component loaded', () => {
    // loading but before delay
    let props: any = {
      isLoading: true,
      timedOut: false,
      error: false,
      pastDelay: false
    }

    const wrapper = shallow(<RouteLoader {...props} />);
    const div = wrapper.find('div');

    expect(div).toHaveLength(0);
  });
});
