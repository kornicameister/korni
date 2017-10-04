// Copyright 2017 @ kornicameister
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Collapse, Navbar, NavbarToggler, NavbarBrand,
  Nav, NavItem, NavLink } from 'reactstrap';

import {AsyncHome, AsyncAbout} from '../routes';

export default class TopBar extends React.Component {
  state = {
    is_open: false
  }

  toggle() {
    let is_open: boolean = this.state.is_open
    this.setState({ is_open: !is_open })
  }

  render() {
    return (
      <div>
        <Navbar color="faded" dark expand="md">
          <NavbarBrand href="/">kornicameister</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.is_open} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
              </NavItem>
            </Nav>
            <Switch>
              <Route path="/" component={AsyncHome}/>
              <Route path="/about" component={AsyncAbout}/>
            </Switch>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
