// Copyright 2017 @ kornicameister
import * as React from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

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
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
