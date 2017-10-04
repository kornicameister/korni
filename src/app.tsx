import * as React from 'react';

import { Container, Row, Col } from 'reactstrap';

import TopBar from './components/top_bar';
import TopPage from './components/top_page';

const App = (props: any) => {
  return (
    <div>
      <header>
        <TopBar />
      </header>
      <main>
        <Container fluid>
          <Row><Col><TopPage /></Col></Row>
        </Container>
      </main>
    </div>
  );
};
export default App;
