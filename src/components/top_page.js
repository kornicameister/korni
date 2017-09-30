import { createElement } from 'react';
import { routeNode } from 'react-router5';

// importing pages (i.e. components)
import NotFoundPage from '../pages/not_found';
import HomePage from '../pages/home';
// importing pages (i.e. components)

const components = {
  home: HomePage
};

const TopPage = props => {
  const { route } = props;
  const segment = route && route.name.split('.')[0];

  return createElement(components[segment] || NotFoundPage);
};

export default routeNode('')(TopPage);
