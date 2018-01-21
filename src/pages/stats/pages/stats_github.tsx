import * as React from 'react';
import * as moment from 'moment';

import * as firebase from '../../../data/firebase';

interface GithubContribution {
  id: string;
  repo: string;
  isFork: boolean;
  isPrivate: boolean;
}

interface Contributions {
  [kind: string]: GithubContribution[];
}

interface Meta {
  date: Date;
}

const GithubContributionsStats = firebase.withCollection(
  class GithubContributions extends React.Component<
    firebase.FirestoreComponentProps<GithubContribution[]>
  > {
    render() {
      const { data } = this.props;

      const contributions = data
        ? data.sort((a, b) => a.id.localeCompare(b.id)).reduce(
            (contributions, contrib) => {
              const contribKind = contrib.isPrivate ? 'private' : 'public';
              const contribs = contributions[contribKind];
              if (contribs) {
                contribs.push(contrib);
              } else {
                contributions[contribKind] = [contrib];
              }
              return contributions;
            },
            {} as Contributions,
          )
        : {};

      return (
        <div className="text-center">
          {Object.keys(contributions).map(kind => {
            const contribs = contributions[kind];
            return (
              <div key={`contributions-${kind}`}>
                {kind === 'public' ? 'Public' : 'Private'} contributions :{' '}
                <strong>{contribs.length}</strong>
              </div>
            );
          })}
        </div>
      );
    }
  },
  db =>
    db
      .collection('contribution')
      .where('platform', '==', 'github')
      .orderBy('until', 'desc'),
  doc => ({
    id: doc.id,
    repo: doc.data()['repo'],
    isFork: doc.data()['is_fork'],
    isPrivate: doc.data()['is_private'],
  }),
);

const Meta = firebase.withDocument(
  class ContributionMeta extends React.Component<firebase.FirestoreComponentProps<Meta>> {
    render() {
      const { data } = this.props;
      return data ? (
        <div className="text-center">
          <h4>Last run : {`${moment(data.date).format('DD-MM-YYYY')}`}</h4>
        </div>
      ) : null;
    }
  },
  db => db.collection('meta').doc('last_run'),
  doc => ({
    id: doc.id,
    date: doc.data()['date'],
  }),
);

export default class GithubStats extends React.Component<any, any> {
  public render() {
    return (
      <div className="github">
        <Meta />
        <GithubContributionsStats />
      </div>
    );
  }
}
