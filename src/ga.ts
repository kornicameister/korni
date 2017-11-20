import * as ReactGA from 'react-ga';

const prodMarker: string = 'production';
const isProd: boolean = process.env.NODE_ENV === prodMarker;

let registerGA: () => void;
let _onChange: (path: string) => void;

if (isProd) {
  registerGA = () => {
    const key: string | undefined = process.env.REACT_APP_GA_KEY;
    if (!key) {
      return false;
    } else {
      ReactGA.initialize(key, { debug: false });
      ReactGA.pageview(window.location.pathname + window.location.search);
      return true;
    }
  };
  _onChange = (path: string) => {
    ReactGA.pageview(path);
  };
} else {
  registerGA = () => {
    return false;
  };
  _onChange = string => {
    return false;
  };
}

export function onChangeGA(path: string) {
  _onChange(path);
}
export default registerGA;
