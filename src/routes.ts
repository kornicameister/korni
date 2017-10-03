import Loadable from 'react-loadable';
import RouteLoader from './router';

export const AsyncHome = Loadable({
  loader: () => import('./pages/home'),
  loading: RouteLoader
});
export const AsyncNotFound = Loadable({
  loader: () => import('./pages/not_found'),
  loading: RouteLoader
});
export const AsyncAbout = Loadable({
  loader: () => import('./pages/about'),
  loading: RouteLoader
});
