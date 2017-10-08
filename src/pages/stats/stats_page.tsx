import * as React from 'react';
import { Jumbotron, Container } from 'reactstrap';

import WakaTimeStats from './stats_wakatime';

export default class StatsPage extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <WakaTimeStats />
          </Container>
        </Jumbotron>
      </div>
    )
  }
}
