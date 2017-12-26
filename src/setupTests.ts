// init env
const localStorageMock = {
  clear: jest.fn(),
  getItem: jest.fn(),
  setItem: jest.fn(),
};
global.localStorage = localStorageMock;
global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};
// init env

import { configure as EnzymeConfigure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

EnzymeConfigure({ adapter: new Adapter() });
