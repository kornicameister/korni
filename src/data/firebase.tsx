import * as React from 'react';

import * as firebase from 'firebase/app';
import * as firestore from './store';

/**
 * Remove the variants of the second union of string literals from
 * the first.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
 */
type Diff<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T];

/**
 * Drop keys `K` from `T`.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
 */
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

export interface FirestoreComponentProps {
  data: FirestoreData;
}

interface FirestoreData {
  [id: string]: {};
}

export function withDocument<P extends FirestoreComponentProps>(
  Comp: React.ComponentClass<P> | React.StatelessComponent<P>,
  query: (db: firebase.firestore.Firestore) => firebase.firestore.DocumentReference,
): React.ComponentClass<Omit<P, keyof FirestoreComponentProps>> {
  interface LocalState {
    db: firestore.Firestore;
    updateListener?: () => void;
    data: FirestoreData;
  }

  class WithFirestoreComponent extends React.Component<
    Omit<P, keyof FirestoreComponentProps>,
    LocalState
  > {
    constructor(props: Omit<P, keyof FirestoreComponentProps>) {
      super(props);
      this.state = {
        db: firestore.ref(),
        data: {},
      };
    }

    componentWillMount() {
      const { db } = this.state;
      switch (db.kind) {
        case firestore.Status.OK:
          this.setState({
            updateListener: query(db.ref).onSnapshot(snapshot => {
              this.setState({
                data: this.snapshotToData(snapshot),
              });
            }),
          });
        case firestore.Status.Err:
          return;
      }
    }

    componentWillUnmount() {
      const { updateListener } = this.state;
      updateListener && updateListener();
    }

    snapshotToData = (snapshot: firebase.firestore.DocumentSnapshot) => {
      return snapshot.data();
    };

    render() {
      const { data } = this.state;
      return <Comp data={data} {...this.props} />;
    }
  }

  return WithFirestoreComponent;
}

export function withCollection<P extends FirestoreComponentProps>(
  Comp: React.ComponentClass<P> | React.StatelessComponent<P>,
  query: (db: firebase.firestore.Firestore) => firebase.firestore.Query,
): React.ComponentClass<Omit<P, keyof FirestoreComponentProps>> {
  interface LocalState {
    db: firestore.Firestore;
    updateListener?: () => void;
    data: FirestoreData;
  }

  class WithFirestoreComponent extends React.Component<
    Omit<P, keyof FirestoreComponentProps>,
    LocalState
  > {
    constructor(props: Omit<P, keyof FirestoreComponentProps>) {
      super(props);
      this.state = {
        db: firestore.ref(),
        data: {},
      };
    }

    componentWillMount() {
      const { db } = this.state;
      switch (db.kind) {
        case firestore.Status.OK:
          this.setState({
            updateListener: query(db.ref).onSnapshot(snapshot => {
              this.setState({
                data: this.snapshotToData(snapshot),
              });
            }),
          });
        case firestore.Status.Err:
          return;
      }
    }

    componentWillUnmount() {
      const { updateListener } = this.state;
      updateListener && updateListener();
    }

    snapshotToData = (snapshot: firebase.firestore.QuerySnapshot) => {
      const newData = {};
      snapshot.forEach(doc => {
        newData[doc.id] = doc.data();
      });
      return newData;
    };

    render() {
      const { data } = this.state;
      return <Comp data={data} {...this.props} />;
    }
  }

  return WithFirestoreComponent;
}
