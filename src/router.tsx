import * as classNames from 'classnames';
import * as React from 'react';
import * as RC from 'react-loadable';
import * as MUI from 'material-ui';

import Spinner from './common/spinner';

export default class RouteLoader extends React.Component<RC.LoadingComponentProps> {
  public render() {
    return <MUI.Grid container>{this.renderLoader()}</MUI.Grid>;
  }

  private renderLoader(): JSX.Element | null {
    const classes = classNames('alert', {
      'alert-danger': !this.props.isLoading && this.props.error,
      'alert-info': this.props.isLoading && !this.props.timedOut && this.props.pastDelay,
      'alert-warning': this.props.isLoading && this.props.timedOut,
    });

    if (this.props.isLoading) {
      if (this.props.timedOut) {
        return (
          <div className={classes} role="alert">
            Loader timed out!
          </div>
        );
      } else if (this.props.pastDelay) {
        return <Spinner className="mx-auto" />;
      } else {
        return null;
      }
    } else if (this.props.error) {
      return (
        <div className={classes} role="alert">
          Error! Component failed to load
        </div>
      );
    } else {
      return null;
    }
  }
}
