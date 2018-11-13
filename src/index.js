// styles
import 'normalize.css';
import './main.css';

// Elm and rest
import { Elm } from './Main.elm';
import registerServiceWorker from './registerServiceWorker';

Elm.Main.init({
  node: document.getElementById('root'),
});

registerServiceWorker();
