// Copyright 2017 @ kornicameister
// @flow weak

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import logo from '../static/logo.svg';

const styles = theme => ({
  root: {
    width: '100%'
  },
  avatar: {
    margin: 10
  }
});

const TopBar = props => {
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
