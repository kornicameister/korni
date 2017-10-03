// Copyright 2017 @ kornicameister
import * as React from 'react';
import * as PropTypes from 'prop-types';

import logo from '../static/logo.svg';

const styles = theme => ({
  root: {
    width: '100%'
  },
  avatar: {
    margin: 10
  }
});

const TopBar = (props:any) => {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Avatar alt="kornicameister" src={logo} classnames={classes.avatar} />
          <Typography type="title" color="inherit">
            kornicameister
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopBar);
