import * as React from 'react';

import { Container, Row, Col } from 'reactstrap';
import { Route, Switch, NavLink as RouterNavLink } from 'react-router-dom';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand,
  Nav, NavItem
} from 'reactstrap';

import {
  AsyncHome,
  AsyncAbout,
  AsyncNotFound
} from './routes';

export default class App extends React.Component {

  state: any = {
    is_open: false
  }

  toggleNavBar() {
    let is_open: boolean = this.state.is_open
    this.setState({ is_open: !is_open })
  }

  renderTravisBadge() {
    let href: string = 'https://travis-ci.org/kornicameister/korni';
    let url: string = `${href}.svg?branch=master`;
    let alt: string = 'Travis Status'

    return (
      <a href={href}>
        <img id="korni_travis_build" alt={alt} src={url} className="img-fluid"></img>
      </a>
    )

  }

  renderNav() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <RouterNavLink to="/" className="nav-link">Home</RouterNavLink>
        </NavItem>
        <NavItem>
          <RouterNavLink to="/about" className="nav-link">About</RouterNavLink>
        </NavItem>
      </Nav>
    )
  }

  renderBar() {
    return (
      <header>
        <Navbar color="dark" expand="md" className="rounded" dark>
          <NavbarBrand href="/">kornicameister</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavBar} />
          <Collapse isOpen={this.state.is_open} navbar>
            {this.renderNav()}
            {this.renderTravisBadge()}
          </Collapse>
        </Navbar>
      </header>
    )
  }

  renderContent() {
    return (
      <main>
        <Container>
          <Row>
            <Col>
              <Switch>
                <Route path='/' component={AsyncHome} exact />
                <Route path='/about' component={AsyncAbout} exact />
                <Route component={AsyncNotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </main>
    )
  }

  render() {
    return (
      <Container>
        {this.renderBar()}
        {this.renderContent()}
      </Container>
    );
  }
};
