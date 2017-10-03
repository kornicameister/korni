import * as React from 'react';

import { Jumbotron } from 'reactstrap';

const NotFoundPage = (props: any) => {
  const { route } = props;
  return (
    <div>
      <Jumbotron>
        <h3>Requested page <b>{route.path}</b> not found</h3>
        <p>
          Seems like <b>{route.path}</b> is not part of this page. Sorry ;-((((
        </p>
      </Jumbotron>
    </div>
  );
};
export default NotFoundPage;
