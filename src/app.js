// @flow weak

import React, { Component } from 'react';

import TopBar from './components/top_bar';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
