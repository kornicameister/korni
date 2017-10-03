import * as React from 'react';
import * as PropTypes from 'prop-types';

import TopBar from './components/top_bar';
import TopPage from './components/top_page';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  }
});

const App = (props:any) => {
  const classes = props.classes;
  return (
    <div classname={classes.root}>
      <header>
        <TopBar />
      </header>
      <main>
        <Grid
          container
          spacing={24}
          direction={'column'}
          justify={'center'}
          align={'center'}
        >
          <Grid item xs={12}>
            <TopPage />
          </Grid>
        </Grid>
      </main>
    </div>
  );
};
App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
