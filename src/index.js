// styles
import 'normalize.css';
import './main.css';

// Elm and rest
import { Elm } from './Main.elm';
import registerServiceWorker from './registerServiceWorker';

const VERSION =
  process.env.NODE_ENV === 'development' ? 'dev' : process.env.ELM_APP_VERSION;

Elm.Main.init({
  node: document.getElementById('root'),
  flags: VERSION,
});

registerServiceWorker();
