import * as classnames from 'classnames';
import * as React from 'react';

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

export enum Command {
  HELP = 'help',
  WORK = 'work',
  EDUCATION = 'education',
  SKILLS = 'skills',
  LANGUAGES = 'languages',
  BASIC = 'basic',
  AWARDS = 'awards',
  PUBLICATIONS = 'publications',
  INTERESTS = 'interests',
  REFERENCES = 'references'
}
export const Commands: string[] = [
  Command.HELP, Command.WORK,
  Command.SKILLS, Command.LANGUAGES,
  Command.BASIC, Command.EDUCATION,
  Command.AWARDS, Command.PUBLICATIONS,
  Command.INTERESTS, Command.REFERENCES
];

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
      <div className='d-flex' key='command'>
        <div className='p-5 flex-row'>
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
        {this.renderCV()}
      </div>
    );
  }

  private renderCV() {
    return (
      <div className='p-2 flex-row mx-auto' key='result'>
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