// libs
import jsonp from 'jsonp';

// styles
import 'normalize.css';
import './main.css';

// Elm and rest
import { Elm } from './Main.elm';
import registerServiceWorker from './registerServiceWorker';

const VERSION =
  process.env.NODE_ENV === 'development' ? 'dev' : process.env.ELM_APP_VERSION;

const app = Elm.Main.init({
  node: document.getElementById('root'),
  flags: VERSION,
});
registerServiceWorker();

setTimeout(() => {
  [
    [
      'languages',
      'https://wakatime.com/share/@kornicameister/7d61cd0d-5c94-4030-83d0-9d88e86e1074.json',
    ],
    [
      'editors',
      'https://wakatime.com/share/@kornicameister/dd317183-0f14-41e8-8668-61779de7bb70.json',
    ],
  ].map(entry => {
    let category = entry[0];
    let url = entry[1];
    jsonp(url, (err, data) => {
      if (!!err) {
        return;
      }
      app.ports.receiveWakatimeStats.send({ category, data });
    });
  });
}, 1000);
