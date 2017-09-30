// @flow weak

import React, { Component } from 'react';

import TopBar from './components/top_bar';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <p className="App-intro">Initial version ;)</p>
      </div>
    );
  }
}

export default App;
