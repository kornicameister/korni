import classnames from 'classnames';
import * as React from 'react';
import { NavLink as RouterNavLink, Route, Switch } from 'react-router-dom';

import { AsyncAbout, AsyncCV, AsyncHome, AsyncNotFound, AsyncStats } from './routes';

interface State {
  is_open: boolean;
}

export default class App extends React.Component<{}, State> {
  constructor(props: {}, state: State) {
    super(props, state);
    this.state = {
      is_open: false,
    };
  }

  public render() {
    return (
      <div className="container">
        {this.renderBar()}
        {this.renderContent()}
      </div>
    );
  }
  private toggleNavBar() {
    const is_open: boolean = this.state.is_open;
    this.setState({ is_open: !is_open });
  }

  private renderBar() {
    const { is_open } = this.state;
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => this.toggleNavBar()}>
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="/">
            <b>kornicameister [{process.env.REACT_APP_VERSION as string}]</b>
          </a>
          <div className={classnames('navbar-collapse', { collapse: !is_open })}>
            <ul className="ml-auto navbar-nav">
              <div className="nav-item">
                <RouterNavLink to="/" className="nav-link">
                  Home
                </RouterNavLink>
              </div>
              <div className="nav-item">
                <RouterNavLink to="/cv" className="nav-link">
                  CV
                </RouterNavLink>
              </div>
              <div className="nav-item">
                <RouterNavLink to="/about" className="nav-link">
                  About
                </RouterNavLink>
              </div>
              <div className="nav-item">
                <RouterNavLink to="/stats" className="nav-link">
                  Stats
                </RouterNavLink>
              </div>
            </ul>
            <img
              src="https://circleci.com/gh/kornicameister/korni/tree/master.svg?style=svg"
              alt="Circle CI badge"
              title="CircleCI @ master"
            />
          </div>
        </nav>
      </header>
    );
  }

  private renderContent() {
    return (
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="col">
              <Switch>
                <Route path="/" component={AsyncHome} exact />
                <Route path="/cv" component={AsyncCV} />
                <Route path="/about" component={AsyncAbout} />
                <Route path="/stats" component={AsyncStats} />
                <Route component={AsyncNotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
