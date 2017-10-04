// Copyright 2017 @ kornicameister
import * as React from 'react';
// import { Route, Switch } from 'react-router-dom';

import { Collapse, Navbar, NavbarToggler, NavbarBrand,
  Nav, NavItem, NavLink } from 'reactstrap';

// import {AsyncHome, AsyncAbout, AsyncNotFound} from '../routes';

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
      <Navbar color="dark" expand="md" fixed="top" toggleable dark full>
        <NavbarBrand href="/">kornicameister</NavbarBrand>
        <NavbarToggler onClick={this.toggle} left={true}/>
        <Collapse isOpen={this.state.is_open} navbar>
          <Nav className="ml-auto" navbar pills>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
