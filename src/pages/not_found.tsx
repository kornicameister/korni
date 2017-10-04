import * as React from 'react';

import { Jumbotron } from 'reactstrap';

const NotFoundPage = (location: any) => {
  return (
    <div>
      <Jumbotron>
        <h3>Requested page <b>{location.pathname}</b> not found</h3>
        <p>
          Seems like <b>{location.pathname}</b> is not part of this page. Sorry ;-((((
        </p>
      </Jumbotron>
    </div>
  );
};
export default NotFoundPage;
