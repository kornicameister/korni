import * as React from 'react';
import * as ReactGA from 'react-ga';
import * as ReactRouterDOM from 'react-router-dom';

const prodMarker: string = 'production';
const isProd: boolean = process.env.NODE_ENV === prodMarker;

export const GoogleAnalytics = isProd
  ? ReactRouterDOM.withRouter<ReactRouterDOM.RouteComponentProps<{}>>(
      class GAProd extends React.Component<ReactRouterDOM.RouteComponentProps<{}>> {
        componentWillMount() {
          this.registerGA();
        }

        componentDidUpdate(prevProps: ReactRouterDOM.RouteComponentProps<{}>) {
          if (this.props.location !== prevProps.location) {
            requestAnimationFrame(() => ReactGA.pageview(this.props.location.pathname));
          }
        }

        registerGA = () => {
          const key: string | undefined = process.env.REACT_APP_GA_KEY;
          if (!key) {
            return false;
          } else {
            ReactGA.initialize(key, { debug: false });
            ReactGA.pageview(window.location.pathname + window.location.search);
            return true;
          }
        };

        render() {
          return this.props.children;
        }
      },
    )
  : (props: any) => {
      return props.children;
    };
