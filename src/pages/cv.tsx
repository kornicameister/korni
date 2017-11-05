import * as classnames from 'classnames';
import * as React from 'react';

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
  CVReferences,
  CVSchool,
  CVSkills,
  CVWork
} from './cv-routes';
import './cv.css';

interface Props {
  resume: any;
}

interface State {
  model: Model;
  command: Command;
  history: Command[];
}

interface Model {
  raw: string;
  error: boolean;
}

export class CVPage extends React.Component<Props, State> {

  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {
      command: Command.BASIC, // render basic information about me first
      history: [],
      model: {
        raw: '',
        error: false
      }
    };
  }

  public render() {
    return (
      <div className='container' key='command'>
        {this.renderPrompt()}
        {this.renderCV()}
      </div>
    );
  }
  private renderPrompt() {
    return (
      <div className='p-2 row'>
        <div className='input-group'>
          <span className='input-group-addon' id='cv-prompt'>$</span>
          <input type='text'
            className={classnames('form-control', {
              'is-invalid': this.state.model.error && !!this.state.model.raw,
              'is-valid': !this.state.model.error && !!this.state.model.raw
            })}
            placeholder='command' aria-label='Command' aria-describedby='cv-prompt'
            value={this.state.model.raw}
            onChange={(e) => this.handleCommandInput(e)}
            onKeyDown={(e) => this.handleKey(e)}
            required={true} />
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
          {(this.state.command === Command.REFERENCES) && <CVReferences references={this.props.resume.references} />}
          {(this.state.command === Command.AWARDS) && <CVAwards awards={this.props.resume.awards} />}
        </div>
      </div>
    );
  }

  private handleKey(event: React.KeyboardEvent<any>): void {
    switch (event.key) {
      case 'Enter': this.handleEnter(); break;
      default:
      // do nothing
    }
  }

  private handleEnter(): void {
    const nextCmd: Command = Command[this.state.model.raw.toUpperCase()];
    const prevCmd: Command = this.state.command;
    const history: Command[] = this.state.history;

    history.push(prevCmd);

    this.setState({
      command: nextCmd,
      history
    });
  }

  private handleCommandInput(event: React.ChangeEvent<any>): void {
    const model = this.state.model;

    model.raw = event.target.value;
    model.error = Commands.indexOf(model.raw) < 0;

    this.setState({ model });
  }

}

export default CVPage;
