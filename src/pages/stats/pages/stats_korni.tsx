import * as React from 'react';

import ChangeLog from './korni/changelog';

export default class KorniStats extends React.Component<any, any> {
  public render() {
    return (
      <div className="container">
        <ChangeLog />
      </div>
    );
  }
}
