// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import TopBar from './components/top_bar';
import TopPage from './components/top_page';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  }
});

const App = props => {
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
