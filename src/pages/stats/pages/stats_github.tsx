import * as React from 'react';
import * as moment from 'moment';

import * as firebase from '../../../data/firebase';

const GithubContributions = firebase.withCollection(
  class GithubContributions extends React.Component<firebase.FirestoreComponentProps> {
    render() {
      const { data } = this.props;
      return Object.keys(data)
        .reduce((docIds: string[], docId: string) => {
          if (docId in docIds) {
            return docIds;
          }
          docIds.push(docId);
          return docIds;
        }, [])
        .sort((a, b) => a.localeCompare(b))
        .map(docId => <div key={docId}>{data[docId]['repo']}</div>);
    }
  },
  db =>
    db
      .collection('contribution')
      .where('platform', '==', 'github')
      .orderBy('until', 'desc'),
);

const Meta = firebase.withDocument(
  class ContributionMeta extends React.Component<firebase.FirestoreComponentProps> {
    render() {
      return (
        <div className="text-center">
          <h3>Last run : {`${moment(this.props.data['date']).format('DD MM YYYY')}`}</h3>
        </div>
      );
    }
  },
  db => db.collection('meta').doc('last_run'),
);

export default class GithubStats extends React.Component<any, any> {
  public render() {
    return (
      <div className="github">
        <Meta />
        <GithubContributions />
      </div>
    );
  }
}
