import * as classnames from 'classnames';
import * as React from 'react';

interface ClickableCardProps {
  onClick: React.MouseEventHandler<any>;
  label: string;
  padding?: number;
}

export class ClickableCard extends React.Component<ClickableCardProps, { hover: boolean }> {

  constructor(props: ClickableCardProps, state: any) {
    super(props, state);
    this.state = { hover: false };
  }

  public render() {
    const { onClick, padding, label } = this.props;
    const { hover } = this.state;

    const stateClassName = {
      'border-dark text-dark': !hover,
      'border-white text-white bg-dark': hover
    };

    return (
      <div className={classnames('card clickable', `mb-${padding || 0}`, stateClassName)}
        onClick={onClick}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}>
        <div className='card-body'>
          <div className='card-title'>{label}</div>
        </div>
      </div>
    );
  }

}
