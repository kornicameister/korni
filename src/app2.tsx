import * as React from 'react';

import './app2.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="banner">
          <h1>Slide One</h1>
        </div>
        <div className="banner">
          <h1>Slide Two</h1>
        </div>
        <div className="banner">
          <h1>Slide Three</h1>
        </div>
      </>
    );
  }
}
