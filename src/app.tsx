import * as React from 'react';

import { Container, Row, Col } from 'reactstrap';
import { Route, Switch, NavLink as RouterNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Fade
} from 'reactstrap';

import { AsyncHome, AsyncAbout, AsyncNotFound, AsyncStats } from './routes';
import TravisBadge from './common/travis_badge';

export default class App extends React.Component {
  state: any = {
    is_open: false
  };

  toggleNavBar() {
    let is_open: boolean = this.state.is_open;
    this.setState({ is_open: !is_open });
  }

  renderNav() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <RouterNavLink to="/" className="nav-link">
            Home
          </RouterNavLink>
        </NavItem>
        <NavItem>
          <RouterNavLink to="/about" className="nav-link">
            About
          </RouterNavLink>
        </NavItem>
        <NavItem>
          <RouterNavLink to="/stats" className="nav-link">
            Stats
          </RouterNavLink>
        </NavItem>
      </Nav>
    );
  }

  renderBar() {
    return (
      <header>
        <Navbar color="dark" expand="md" className="rounded" dark>
          <NavbarBrand href="/">kornicameister</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavBar} />
          <Collapse isOpen={this.state.is_open} navbar>
            {this.renderNav()}
            <TravisBadge />
          </Collapse>
        </Navbar>
      </header>
    );
  }

  renderContent() {
    return (
      <main>
        <Container>
          <Row>
            <Col>
              <Fade>
                <Switch>
                  <Route path="/" component={AsyncHome} exact />
                  <Route path="/about" component={AsyncAbout} exact />
                  <Route path="/stats" component={AsyncStats} exact />
                  <Route component={AsyncNotFound} />
                </Switch>
              </Fade>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }

  render() {
    return (
      <Container>
        {this.renderBar()}
        {this.renderContent()}
      </Container>
    );
  }
}
