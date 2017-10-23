import Loadable from 'react-loadable';
import RouteLoader from '../../router';

export const LoadableWakaTime = Loadable({
  loader: () => import('./pages/stats_wakatime'),
  loading: RouteLoader
});
export const LoadableWhatPulse = Loadable({
  loader: () => import('./pages/stats_whatpulse'),
  loading: RouteLoader
});
export const LoadableKorni = Loadable({
  loader: () => import('./pages/stats_korni'),
  loading: RouteLoader
});
export const LoadableGithub = Loadable({
  loader: () => import('./pages/stats_github'),
  loading: RouteLoader
});
export const LoadableGitlab = Loadable({
  loader: () => import('./pages/stats_gitlab'),
  loading: RouteLoader
});
