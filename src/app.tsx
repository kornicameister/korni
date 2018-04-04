import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import * as MUI from 'material-ui';
import * as MUIIcons from 'material-ui-icons';

import TravisBadge from './common/travis_badge';
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

  private toggleNavBar() {
    const is_open: boolean = this.state.is_open;
    this.setState({ is_open: !is_open });
  }

  private renderBar() {
    // const { is_open } = this.state;
    return (
      <MUI.AppBar position="sticky">
        <MUI.Toolbar>
          <MUI.IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleNavBar()}>
            <MUIIcons.Menu />
          </MUI.IconButton>
          <MUI.Typography variant="title">
            <b>kornicameister [{process.env.REACT_APP_VERSION as string}]</b>
          </MUI.Typography>
          <ReactRouterDOM.Link to="/">
            <MUI.Button>Home</MUI.Button>
          </ReactRouterDOM.Link>
          <ReactRouterDOM.Link to="/cv">
            <MUI.Button>CV</MUI.Button>
          </ReactRouterDOM.Link>
          <ReactRouterDOM.Link to="/about">
            <MUI.Button>About</MUI.Button>
          </ReactRouterDOM.Link>
          <ReactRouterDOM.Link to="/stats">
            <MUI.Button>Stats</MUI.Button>
          </ReactRouterDOM.Link>
          <TravisBadge />
        </MUI.Toolbar>
      </MUI.AppBar>
    );
  }

  private renderContent() {
    return (
      <main role="main">
        <ReactRouterDOM.Switch>
          <ReactRouterDOM.Route path="/" component={AsyncHome} exact />
          <ReactRouterDOM.Route path="/cv" component={AsyncCV} />
          <ReactRouterDOM.Route path="/about" component={AsyncAbout} />
          <ReactRouterDOM.Route path="/stats" component={AsyncStats} />
          <ReactRouterDOM.Route component={AsyncNotFound} />
        </ReactRouterDOM.Switch>
      </main>
    );
  }

  render() {
    return (
      <MUI.Grid container>
        {this.renderBar()}
        {this.renderContent()}
      </MUI.Grid>
    );
  }
}
