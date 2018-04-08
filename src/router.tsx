import classnames from 'classnames';
import * as React from 'react';
import { LoadingComponentProps } from 'react-loadable';

import Spinner from './common/spinner';

export default class RouteLoader extends React.Component<LoadingComponentProps> {
  render() {
    const classes = classnames('alert', {
      'alert-danger': !this.props.isLoading && this.props.error,
      'alert-info': this.props.isLoading && !this.props.timedOut && this.props.pastDelay,
      'alert-warning': this.props.isLoading && this.props.timedOut,
    });

    if (this.props.isLoading) {
      if (this.props.timedOut) {
        return (
          <div className="container-fluid clearfix">
            <div className={classes} role="alert">
              Loader timed out!
            </div>
          </div>
        );
      } else if (this.props.pastDelay) {
        return (
          <div className="container-fluid clearfix">
            <Spinner className="mx-auto" />
          </div>
        );
      } else {
        return null;
      }
    } else if (this.props.error) {
      return (
        <div className="container-fluid clearfix">
          <div className={classes} role="alert">
            Error! Component failed to load
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
