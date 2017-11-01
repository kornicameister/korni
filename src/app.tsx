import * as React from 'react';
import { NavLink as RouterNavLink, Route, Switch } from 'react-router-dom';
import {
  Col,
  Collapse,
  Container,
  Fade,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Row
} from 'reactstrap';

import TravisBadge from './common/travis_badge';
import { AsyncAbout, AsyncCV, AsyncHome, AsyncNotFound, AsyncStats } from './routes';

interface IAppState {
  is_open: boolean;
}

export default class App extends React.Component<any, IAppState> {
  constructor() {
    super();
    this.state = {
      is_open: false
    };
  }

  public render() {
    return (
      <Container>
        {this.renderBar()}
        {this.renderContent()}
      </Container>
    );
  }
  private toggleNavBar() {
    const is_open: boolean = this.state.is_open;
    this.setState({ is_open: !is_open });
  }

  private renderNav() {
    return (
      <Nav className='ml-auto' navbar>
        <NavItem>
          <RouterNavLink to='/' className='nav-link'>
            Home
          </RouterNavLink>
        </NavItem>
        <NavItem>
          <RouterNavLink to='/cv' className='nav-link'>
            CV
          </RouterNavLink>
        </NavItem>
        <NavItem>
          <RouterNavLink to='/about' className='nav-link'>
            About
          </RouterNavLink>
        </NavItem>
        <NavItem>
          <RouterNavLink to='/stats' className='nav-link'>
            Stats
          </RouterNavLink>
        </NavItem>
      </Nav>
    );
  }

  private renderBar() {
    return (
      <header>
        <Navbar color='dark' expand='md' className='rounded' dark>
          <NavbarBrand href='/'>
            <b>kornicameister [{process.env.REACT_APP_VERSION as string}]</b>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavBar} />
          <Collapse isOpen={this.state.is_open} navbar>
            {this.renderNav()}
            <TravisBadge />
          </Collapse>
        </Navbar>
      </header>
    );
  }

  private renderContent() {
    return (
      <main>
        <Container>
          <Row>
            <Col>
              <Fade>
                <Switch>
                  <Route path='/' component={AsyncHome} exact />
                  <Route path='/cv' component={AsyncCV} />
                  <Route path='/about' component={AsyncAbout} />
                  <Route path='/stats' component={AsyncStats} />
                  <Route component={AsyncNotFound} />
                </Switch>
              </Fade>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}
