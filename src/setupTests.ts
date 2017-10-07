// init env
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};
//init env

import { configure as EnzymeConfigure } from 'enzyme';
import * as  Adapter from 'enzyme-adapter-react-16';

EnzymeConfigure({ adapter: new Adapter() });
