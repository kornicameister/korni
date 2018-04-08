import * as React from 'react';

const NotFoundPage = (location: any) => {
  return (
    <div className="jumbotron">
      <h3>
        Requested page <b>{location.pathname}</b> not found
      </h3>
      <p>
        Seems like <b>{location.pathname}</b> is not part of this page. Sorry ;-((((
      </p>
    </div>
  );
};
export default NotFoundPage;
