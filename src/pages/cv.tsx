import * as classnames from 'classnames';
import * as React from 'react';

interface Props {
  resume: object;
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

enum Command {
  HELP = 'help',
  LIST = 'list',
  ABOUT = 'about',
  CONTACT = 'contact',
  WORK = 'work',
  SKILLS = 'skills',
  LANGUAGES = 'lang'
}
const Commands: string[] = [
  Command.ABOUT, Command.LIST, Command.HELP, Command.CONTACT, Command.WORK,
  Command.SKILLS, Command.LANGUAGES
];

export default class CVPage extends React.Component<Props, State> {

  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {
      command: Command.HELP,
      history: [],
      model: {
        raw: '',
        error: false
      }
    };
  }

  public render() {
    return (
      <div className='d-flex'>
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
              onKeyPress={(e) => e.key === 'Enter' && this.handleEnter(e)}
              required={true} />
          </div>
        </div>
        <div className='p-2 flex-row mx-auto' hidden={this.state.command !== Command.HELP}>
          <h1>Help</h1>
        </div>
        <div className='p-2 flex-row mx-auto' hidden={this.state.command !== Command.ABOUT}>
          <h1>About</h1>
        </div>
        <div className='p-2 flex-row mx-auto' hidden={this.state.command !== Command.CONTACT}>
          <h1>Contact</h1>
        </div>
        <div className='p-2 flex-row mx-auto' hidden={this.state.command !== Command.WORK}>
          <h1>Work</h1>
        </div>
        <div className='p-2 flex-row mx-auto' hidden={this.state.command !== Command.SKILLS}>
          <h1>Skills</h1>
        </div>
        <div className='p-2 flex-row mx-auto' hidden={this.state.command !== Command.LANGUAGES}>
          <h1>Languages</h1>
        </div>
      </div>
    );
  }

  private handleEnter(event: React.KeyboardEvent<any>): void {
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
