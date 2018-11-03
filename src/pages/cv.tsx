import * as H from 'history';
import * as React from 'react';
import * as AutoSuggest from 'react-autosuggest';
import { Link, Redirect, Route, RouteComponentProps, withRouter } from 'react-router-dom';

import { Command, Commands } from './cv-common';
import {
  CVAwards,
  CVBasics,
  CVHelp,
  CVInterests,
  CVLanguages,
  CVSchool,
  CVSkills,
  CVWork,
} from './cv-routes';
import './cv.css';

interface Props {
  resume: any;
}

interface State {
  command: string;
  suggestions: string[];
  historyListener: H.UnregisterCallback;
}

function getCommandFromLocation(location: H.Location): string {
  const cmd = location ? location.pathname.replace('/cv/', '') : '';
  if (cmd === '/cv') {
    return '';
  }
  return cmd;
}

export class CVPage extends React.Component<Props & RouteComponentProps<Props>, State> {
  constructor(props: Props & RouteComponentProps<Props>, state: State) {
    super(props, state);
    this.state = {
      command: getCommandFromLocation(this.props.location), // render basic information about me first
      suggestions: [],
      historyListener: this.props.history.listen((location: H.Location) =>
        this.onLocationChange(location),
      ),
    };
  }

  private onLocationChange(location: H.Location) {
    const command: string = getCommandFromLocation(location);
    if (command !== '') {
      this.setState({ command });
    }
  }

  private onNewCommand(raw: string) {
    const { history } = this.props;
    this.setState({ command: raw }, () => {
      if (history && Commands.indexOf(raw) >= 0) {
        history.push(`/cv/${raw}`);
      }
    });
  }

  private onSuggestionsFetchRequested(raw: string) {
    const escapeRegexCharacters = (value: string) => {
      return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };
    const getSuggestions = (value: string) => {
      const inputValue = escapeRegexCharacters(value.trim()).toLowerCase();
      const regex = new RegExp('^' + inputValue, 'i');
      return Commands.filter((cmd: string) => regex.test(cmd));
    };
    this.setState({
      suggestions: getSuggestions(raw),
    });
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  private onSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
    });
  }

  private getSuggestionValue(cmd: string) {
    return cmd;
  }

  private renderSuggestion(cmd: any) {
    return (
      <button className="dropdown-item" type="button">
        {cmd as string}
      </button>
    );
  }

  private renderPrompt() {
    const { command, suggestions } = this.state;
    const inputProps: AutoSuggest.InputProps<string> = {
      placeholder: 'Type a command',
      value: command || '',
      onChange: (event: React.ChangeEvent<string>, params: AutoSuggest.ChangeEvent) =>
        this.onNewCommand(params.newValue),
    };
    const theme = {
      container: 'autosuggest',
      input: 'form-control',
      suggestionsContainer: 'dropdown',
      suggestionsList: `dropdown-menu ${suggestions.length ? 'show' : ''}`,
      suggestionHighlighted: 'text-dark',
    };
    return (
      <div className="p-2 row">
        <div className="mx-auto">
          <AutoSuggest
            theme={theme}
            suggestions={suggestions}
            onSuggestionsFetchRequested={request =>
              this.onSuggestionsFetchRequested(request.value)
            }
            onSuggestionsClearRequested={() => this.onSuggestionsClearRequested()}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
            highlightFirstSuggestion
          />
        </div>
      </div>
    );
  }

  private renderCV() {
    const { match, resume } = this.props;
    if (!match) {
      return null;
    } else {
      return (
        <div className="p-4 row" key="result">
          <div className="cv">
            {Commands.map((cmd: Command) => {
              return (
                <Route
                  key={cmd}
                  path={`${match.url}/${cmd}`}
                  exact={true}
                  render={() => {
                    switch (cmd) {
                      case Command.HELP:
                        return <CVHelp />;
                      case Command.WORK:
                        return <CVWork work={resume.work} />;
                      case Command.SKILLS:
                        return <CVSkills skills={resume.skills} />;
                      case Command.LANGUAGES:
                        return <CVLanguages languages={resume.languages} />;
                      case Command.EDUCATION:
                        return <CVSchool school={resume.education} />;
                      case Command.BASIC:
                        return <CVBasics basics={resume.basics} />;
                      case Command.INTERESTS:
                        return <CVInterests interests={resume.interests} />;
                      case Command.AWARDS:
                        return <CVAwards awards={resume.awards} />;
                      default:
                        return <Redirect to="/cv" />;
                    }
                  }}
                />
              );
            })}
            <Route
              exact
              path={match.url}
              render={() => (
                <div className="mx-auto">
                  <div className="card text-center text-light bg-dark">
                    <div className="card-header">
                      <h3 className="header">CV</h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        You must select one of the CV sections using the prompt above.
                      </p>
                      <p className="card-text">
                        If you need help please go{' '}
                        <Link to="/cv/help" aria-label="CV Help">
                          here
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      );
    }
  }

  public render() {
    return (
      <div className="container" key="command">
        {this.renderPrompt()}
        {this.renderCV()}
      </div>
    );
  }
}

export default withRouter(CVPage) as React.ComponentClass<Props>;
