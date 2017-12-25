import * as React from 'react';
import Loadable from 'react-loadable';
import RouteLoader from './router';

export const AsyncHome = Loadable({
  loader: () => import('./pages/home'),
  loading: RouteLoader,
});
export const AsyncNotFound = Loadable({
  loader: () => import('./pages/not_found'),
  loading: RouteLoader,
});
export const AsyncAbout = Loadable({
  loader: () => import('./pages/about'),
  loading: RouteLoader,
});
export const AsyncStats = Loadable({
  loader: () => import('./pages/stats/stats_page'),
  loading: RouteLoader,
});
export const AsyncCV = Loadable.Map({
  loader: {
    CV: () => import('./pages/cv'),
    resume: () =>
      fetch(
        `https://raw.githubusercontent.com/kornicameister/CV/${process.env
          .REACT_RESUME_VERSION || 'master'}/resume.json`,
      ).then(res => res.json()),
  },
  loading: RouteLoader,
  render(loaded, props) {
    const CVPage = loaded.CV.default;
    const resume = loaded.resume;
    return <CVPage {...props} resume={resume} />;
  },
});
