import * as classnames from 'classnames';
import * as React from 'react';

import './spinner.css';

function getBarStyle(i: number): object {
  const animationDelay: string = (i - 12) / 10 + 's';
  const transform: string = 'rotate(' + i * 30 + 'deg) translate(146%)';
  return {
    WebkitAnimationDelay: animationDelay,
    WebkitTransform: transform,
    animationDelay,
    transform,
  };
}

const Spinner: React.SFC<any> = props => {
  const bars = [];
  const its: number = 12;

  for (let i: number = 0; i < its; i++) {
    bars.push(<div style={getBarStyle(i)} className="react-spinner-bar" key={i} />);
  }

  return (
    <div {...props} className={classnames(props.className || '', 'react-spinner')}>
      {bars}
    </div>
  );
};

export default Spinner;
