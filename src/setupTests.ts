import { configure as EnzymeConfigure } from 'enzyme';
import * as  Adapter from 'enzyme-adapter-react-16';

// init env
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock
//init env

EnzymeConfigure({ adapter: new Adapter() });
