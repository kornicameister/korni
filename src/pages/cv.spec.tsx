import { shallow } from 'enzyme';
import * as React from 'react';

jest.mock('./cv-routes', () => ({
  CVAwards: () => '',
  CVBasics: () => '',
  CVHelp: () => '',
  CVInterests: () => '',
  CVLanguages: () => '',
  CVSchool: () => '',
  CVSkills: () => '',
  CVWork: () => '',
  CVReferences: () => ''
}));

import { CVPage } from './cv';
import { Command, Commands } from './cv-common';
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

describe('CVPage', () => {

  it('renders without crashing', () => {
    shallow(<CVPage resume={{}} />);
  });

  describe('logic', () => {

    let el: any;

    beforeEach(() => {
      el = shallow(<CVPage resume={{}} />);
    });
    afterEach(() => {
      el = null;
    });

    it('should not have error and raw input at start', () => {
      const error: boolean = el.state().model.error;
      const input: string = el.state().model.raw;

      expect(error).toBeFalsy();
      expect(input).toBe('');
    });
    it('should have basics set as initial command', () => {
      expect(el.state().command).toBe(Command.BASIC);
    });

    describe('onChange', () => {

      it('should set raw but have an error in cmd incomplete', () => {
        el.find('[aria-label="Command"]').simulate('change', { target: { value: 'hel' } });

        const error: boolean = el.state().model.error;
        const input: string = el.state().model.raw;

        expect(error).toBeTruthy();
        expect(input).toBe('hel');
      });
      it('should set raw and have no error if cmd complete', () => {
        el.find('[aria-label="Command"]').simulate('change', { target: { value: 'skills' } });

        const error: boolean = el.state().model.error;
        const input: string = el.state().model.raw;

        expect(error).toBeFalsy();
        expect(input).toBe('skills');
      });
    });

    describe('keyDown::enter', () => {
      Commands.forEach((cmd: string) => {
        it(`should set proper command from ${cmd}`, () => {
          el.setState({
            model: { raw: cmd, error: false }
          });
          el.find('[aria-label="Command"]').simulate('keyDown', { key: 'Enter' });
          if (cmd === 'help') {
            expect(el.state().command).toBe(Command.HELP);
          } else if (cmd === 'work') {
            expect(el.state().command).toBe(Command.WORK);
          } else if (cmd === 'education') {
            expect(el.state().command).toBe(Command.EDUCATION);
          } else if (cmd === 'skills') {
            expect(el.state().command).toBe(Command.SKILLS);
          } else if (cmd === 'languages') {
            expect(el.state().command).toBe(Command.LANGUAGES);
          } else if (cmd === 'basic') {
            expect(el.state().command).toBe(Command.BASIC);
          } else if (cmd === 'awards') {
            expect(el.state().command).toBe(Command.AWARDS);
          } else if (cmd === 'publications') {
            expect(el.state().command).toBe(Command.PUBLICATIONS);
          } else if (cmd === 'interests') {
            expect(el.state().command).toBe(Command.INTERESTS);
          } else if (cmd === 'references') {
            expect(el.state().command).toBe(Command.REFERENCES);
          }
        });
      });
    });
  });

  describe('content', () => {
    let el: any;

    beforeEach(() => {
      el = shallow(<CVPage resume={{}} />);
    });
    afterEach(() => {
      el = null;
    });

    [
      [CVAwards, Command.AWARDS], [CVBasics, Command.BASIC],
      [CVInterests, Command.INTERESTS], [CVLanguages, Command.LANGUAGES],
      [CVReferences, Command.REFERENCES], [CVSchool, Command.EDUCATION],
      [CVSkills, Command.SKILLS], [CVWork, Command.WORK]
    ].forEach((item: any[]) => {
      const cmp: FunctionConstructor = item[0];
      const cmd: Command = item[1];

      it(`should contain ${cmp.name} as CV chunk`, () => {
        el.setState({
          command: cmd
        });
        expect(el.find(cmp)).toHaveLength(1);
      });

    });

    it('should contain help chunk', () => {
      el.setState({
        command: Command.HELP
      });
      expect(el.find(CVHelp)).toHaveLength(1);
    });

  });

});
