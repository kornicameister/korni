import Loadable from 'react-loadable';

import RouteLoader from '../router';

export const CVAwards = Loadable({
  loader: () => import('./cv/awards'),
  loading: RouteLoader
});

export const CVBasics = Loadable({
  loader: () => import('./cv/basics'),
  loading: RouteLoader
});

export const CVSchool = Loadable({
  loader: () => import('./cv/school'),
  loading: RouteLoader
});

export const CVWork = Loadable({
  loader: () => import('./cv/work'),
  loading: RouteLoader
});

export const CVLanguages = Loadable({
  loader: () => import('./cv/languages'),
  loading: RouteLoader
});

export const CVSkills = Loadable({
  loader: () => import('./cv/skills'),
  loading: RouteLoader
});

export const CVInterests = Loadable({
  loader: () => import('./cv/interests'),
  loading: RouteLoader
});

export const CVReferences = Loadable({
  loader: () => import('./cv/references'),
  loading: RouteLoader
});

export const CVHelp = Loadable({
  loader: () => import('./cv/help'),
  loading: RouteLoader
});
