// libs
import * as Trianglify from 'trianglify';

// styles
import 'normalize.css';
import './main.css';

// Elm and rest
import { Elm } from './Main.elm';
import registerServiceWorker from './registerServiceWorker';

// generate startup patterns
const PATTERN_COUNT = 32;
const VERSION =
  process.env.NODE_ENV === 'development' ? 'dev' : process.env.ELM_APP_VERSION;

let patternsDataUris = [];
for (let i = 0; i < PATTERN_COUNT; i++) {
  let pattern = Trianglify({
    height: 500,
    width: 500,
    seed: VERSION == 'dev' ? new Date() : VERSION,
  }).png();
  patternsDataUris.push(pattern);
}

Elm.Main.init({
  node: document.getElementById('root'),
  flags: {
    trianglifyDataUris: patternsDataUris,
    version: process.env.NODE_ENV === 'development' ? 'dev' : process.env.ELM_APP_VERSION,
  },
});

registerServiceWorker();
