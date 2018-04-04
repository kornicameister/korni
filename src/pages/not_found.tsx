import * as React from 'react';
import * as MUI from 'material-ui';

const NotFoundPage = (location: any) => {
  return (
    <MUI.Grid container>
      <h3>
        Requested page <b>{location.pathname}</b> not found
      </h3>
      <p>
        Seems like <b>{location.pathname}</b> is not part of this page. Sorry ;-((((
      </p>
    </MUI.Grid>
  );
};
export default NotFoundPage;
