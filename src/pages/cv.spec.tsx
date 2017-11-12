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
import { Command } from './cv-common';
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

    it('should have basics set as initial command', () => {
      expect(el.state().command).toBe(Command.BASIC);
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
