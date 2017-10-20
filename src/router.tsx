import * as React from 'react';
import * as classNames from 'classnames';
import { LoadingComponentProps } from 'react-loadable';
import { Container } from 'reactstrap';

import Spinner from './common/spinner';

export default class RouteLoader extends React.Component<LoadingComponentProps> {

  renderLoader() {
    let classes = classNames('alert', {
      'alert-info': this.props.isLoading && !this.props.timedOut && this.props.pastDelay,
      'alert-danger': !this.props.isLoading && this.props.error,
      'alert-warning': this.props.isLoading && this.props.timedOut
    });

    if (this.props.isLoading) {
      if (this.props.timedOut) {
        return <div className={classes} role="alert">Loader timed out!</div>;
      } else if (this.props.pastDelay) {
        return <Spinner className="mx-auto"/>;
      } else {
        return null;
      }
    } else if (this.props.error) {
      return <div className={classes} role="alert">Error! Component failed to load</div>;
    } else {
      return null;
    }
  }

  render() {
    return (
      <Container className="clearfix" fluid>
        {this.renderLoader()}
      </Container>
    )
  }
}
