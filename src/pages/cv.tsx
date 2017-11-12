import * as React from 'react';
import * as AutoSuggest from 'react-autosuggest';

import {
  Command,
  Commands
} from './cv-common';
import {
  CVAwards,
  CVBasics,
  CVHelp,
  CVInterests,
  CVLanguages,
  CVSchool,
  CVSkills,
  CVWork
} from './cv-routes';
import './cv.css';

interface Props {
  resume: any;
}

interface State {
  command: string;
  suggestions: string[];
}

export class CVPage extends React.Component<Props, State> {

  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {
      command: Command.BASIC, // render basic information about me first
      suggestions: []
    };
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
      suggestions: getSuggestions(raw)
    });
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  private onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  private getSuggestionValue(cmd: string) {
    return cmd;
  }

  private renderSuggestion(cmd: any) {
    return <button className='dropdown-item' type='button'>{cmd as string}</button>;
  }

  private renderPrompt() {
    const { command, suggestions } = this.state;
    const inputProps: AutoSuggest.InputProps = {
      placeholder: 'Type a command',
      value: command,
      onChange: (event: React.ChangeEvent<any>, params: AutoSuggest.ChangeEvent) => this.setState({ command: params.newValue })
    };
    const theme = {
      container: 'autosuggest',
      input: 'form-control',
      suggestionsContainer: 'dropdown',
      suggestionsList: `dropdown-menu ${suggestions.length ? 'show' : ''}`,
      suggestionHighlighted: 'text-dark'
    };
    return (
      <div className='p-2 row'>
        <div className='mx-auto'>
          <AutoSuggest
            theme={theme}
            suggestions={suggestions}
            onSuggestionsFetchRequested={(request) => this.onSuggestionsFetchRequested(request.value)}
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
    return (
      <div className='p-4 row' key='result'>
        <div className='cv'>
          {(this.state.command === Command.HELP) && <CVHelp />}
          {(this.state.command === Command.WORK) && <CVWork work={this.props.resume.work} />}
          {(this.state.command === Command.SKILLS) && <CVSkills skills={this.props.resume.skills} />}
          {(this.state.command === Command.LANGUAGES) && <CVLanguages languages={this.props.resume.languages} />}
          {(this.state.command === Command.EDUCATION) && <CVSchool school={this.props.resume.education} />}
          {(this.state.command === Command.BASIC) && <CVBasics basics={this.props.resume.basics} />}
          {(this.state.command === Command.INTERESTS) && <CVInterests interests={this.props.resume.interests} />}
          {(this.state.command === Command.AWARDS) && <CVAwards awards={this.props.resume.awards} />}
        </div>
      </div>
    );
  }

  public render() {
    return (
      <div className='container' key='command'>
        {this.renderPrompt()}
        {this.renderCV()}
      </div>
    );
  }

}

export default CVPage;
