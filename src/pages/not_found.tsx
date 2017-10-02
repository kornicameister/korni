import * as React from 'react';

import * as PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { routeNode } from 'react-router5';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
});

const NotFoundPage = props => {
  const { route, classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography type="headline" component="h3">
          Requested page <b>{route.path}</b> not found
        </Typography>
        <Typography type="body1" component="p">
          Seems like <b>{route.path}</b> is not part of this page. Sorry ;-((((
        </Typography>
      </Paper>
    </div>
  );
};
NotFoundPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default routeNode('404')(withStyles(styles)(NotFoundPage));
