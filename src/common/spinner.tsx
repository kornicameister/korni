import * as React from 'react';
import * as classnames from 'classnames';

import './spinner.css';

export default class Spinner extends React.Component<any, any> {

  private getBarStyle(i: number): object {
    let animationDelay: string = (i - 12) / 10 + 's';
    let transform: string = 'rotate(' + (i * 30) + 'deg) translate(146%)';
    return {
      'WebkitAnimationDelay': animationDelay,
      'animationDelay': animationDelay,
      'WebkitTransform': transform,
      'transform': transform
    }
  }

  render() {

    const bars = []
    const props = this.props;
    const its: number = 12;

    for (let i: number = 0; i < its; i++) {
      bars.push(
        <div style={this.getBarStyle(i)} className="react-spinner-bar" key={i} />
      );
    }

    return (
      <div {...props} className={classnames(props.className || '', 'react-spinner')}>
        {bars}
      </div>
    )
  }

}
