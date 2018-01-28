import * as React from 'react';
import * as moment from 'moment';

import * as firebase from '../../../data/firebase';

interface GithubContribution {
  id: string;
  repo: string;
  isFork: boolean;
  isPrivate: boolean;
  issueCount: {
    total: number;
    authored: number;
  };
  commitsCount: {
    total: number;
    authored: number;
  };
  pullRequestCount: {
    total: {
      open: number;
      merged: number;
    };
    authored: {
      open: number;
      merged: number;
    };
  };
}

interface Contributions {
  [kind: string]: GithubContribution[];
}

interface ContributionSummary {
  repo: string;
  commits: number;
  pullRequests: number;
  issues: number;
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
        <div className="container-fluid">
          <div className="row">
            {Object.keys(contributions).map(kind => {
              const contribs = contributions[kind];
              return (
                <div key={`contributions-${kind}`} className="col-sm text-center">
                  {kind === 'public' ? 'Public' : 'Private'} contributions :{' '}
                  <strong className="text-success">{contribs.length}</strong>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="row">
            <section className="container-fluid">
              <div className="text-center">
                <h4>Public contributions for all repositories</h4>
              </div>
              <div className="card-deck mx-auto">
                {(contributions['public'] || [])
                  .reduce(
                    (
                      summary: ContributionSummary[],
                      contribution: GithubContribution,
                    ) => {
                      const repo = contribution.repo;
                      const repoSummary = summary.find(s => s.repo === contribution.repo);
                      if (repoSummary) {
                        repoSummary.issues += contribution.issueCount.authored;
                        repoSummary.commits += contribution.commitsCount.authored;
                        repoSummary.pullRequests +=
                          contribution.pullRequestCount.authored.open +
                          contribution.pullRequestCount.authored.merged;
                      } else {
                        summary.push({
                          repo,
                          commits: contribution.commitsCount.authored,
                          issues: contribution.issueCount.authored,
                          pullRequests:
                            contribution.pullRequestCount.authored.open +
                            contribution.pullRequestCount.authored.merged,
                        });
                      }
                      return summary;
                    },
                    [] as ContributionSummary[],
                  )
                  .filter(
                    repoSummary =>
                      repoSummary.commits > 0 &&
                      repoSummary.issues > 0 &&
                      repoSummary.pullRequests > 0,
                  )
                  .map(repoSummary => (
                    <div key={repoSummary.repo} className="col-sm-6">
                      <div className="card">
                        <div className="card-header text-center">
                          <h5 className="card-title">{repoSummary.repo}</h5>
                        </div>
                        <div className="card-body text-justify">
                          <div className="card-text">
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">
                                Commits:{' '}
                                <span className="badge badge-pill badge-dark">
                                  {repoSummary.commits}
                                </span>
                              </li>
                              <li className="list-group-item">
                                Issues:{' '}
                                <span className="badge badge-pill badge-dark">
                                  {repoSummary.issues}
                                </span>
                              </li>
                              <li className="list-group-item">
                                Pull requests:{' '}
                                <span className="badge badge-pill badge-dark">
                                  {repoSummary.pullRequests}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </div>
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
    issueCount: {
      total: doc.data()['issues_count']['total'],
      authored: doc.data()['issues_count']['authored'],
    },
    commitsCount: {
      total: doc.data()['commits_count']['total'],
      authored: doc.data()['commits_count']['authored'],
    },
    pullRequestCount: {
      total: {
        open: doc.data()['pull_request_count']['total']['open'],
        merged: doc.data()['pull_request_count']['total']['merged'],
      },
      authored: {
        open: doc.data()['pull_request_count']['authored']['open'],
        merged: doc.data()['pull_request_count']['authored']['merged'],
      },
    },
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
        <hr />
        <GithubContributionsStats />
      </div>
    );
  }
}
