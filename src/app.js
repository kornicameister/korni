// @flow weak
import React from 'react';

import TopBar from './components/top_bar';
import TopPage from './components/top_page';

const App = () => (
  <div>
    <header>
      <TopBar />
    </header>
    <main>
      <TopPage />
    </main>
  </div>
);

export default App;
