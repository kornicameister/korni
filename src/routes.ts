import Loadable from 'react-loadable';
import RouteLoader from './router';

export const AsyncHome = Loadable({
  loader: () => import('./pages/home'),
  loading: RouteLoader,
  delay: 600
});
export const AsyncNotFound = Loadable({
  loader: () => import('./pages/not_found'),
  loading: RouteLoader,
  delay: 600
});
export const AsyncAbout = Loadable({
  loader: () => import('./pages/about'),
  loading: RouteLoader,
  delay: 600
});
export const AsyncStats = Loadable({
  loader: () => import('./pages/stats/stats_page'),
  loading: RouteLoader
});
