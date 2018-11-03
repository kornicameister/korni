import * as React from 'react';

import * as firebase from 'firebase/app';
import * as firestore from './store';

/**
 * Drop keys `K` from `T`.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface FirestoreComponentProps<T> {
  data?: T;
}

export function withDocument<T, P extends FirestoreComponentProps<T>>(
  Comp: React.ComponentClass<P> | React.StatelessComponent<P>,
  query: (db: firebase.firestore.Firestore) => firebase.firestore.DocumentReference,
  transform: (data: firebase.firestore.DocumentSnapshot) => T,
): React.ComponentClass<Omit<P, keyof FirestoreComponentProps<T>>> {
  interface LocalState {
    db: firestore.Firestore;
    updateListener?: () => void;
    data?: T;
  }

  class WithFirestoreComponent extends React.Component<
    Omit<P, keyof FirestoreComponentProps<T>>,
    LocalState
  > {
    constructor(props: Omit<P, keyof FirestoreComponentProps<T>>) {
      super(props);
      this.state = {
        db: firestore.ref(),
      };
    }

    componentWillMount() {
      const { db } = this.state;
      switch (db.kind) {
        case firestore.Status.OK:
          this.setState({
            updateListener: query(db.ref).onSnapshot(snapshot => {
              this.setState({
                data: transform(snapshot),
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

    render() {
      const { data } = this.state;
      return <Comp data={data} {...this.props} />;
    }
  }

  return WithFirestoreComponent;
}

export function withCollection<T, P extends FirestoreComponentProps<T[]>>(
  Comp: React.ComponentClass<P> | React.StatelessComponent<P>,
  query: (db: firebase.firestore.Firestore) => firebase.firestore.Query,
  transform: (data: firebase.firestore.DocumentData) => T,
): React.ComponentClass<Omit<P, keyof FirestoreComponentProps<T[]>>> {
  interface LocalState {
    db: firestore.Firestore;
    updateListener?: () => void;
    data?: T[];
  }

  class WithFirestoreComponent extends React.Component<
    Omit<P, keyof FirestoreComponentProps<T>>,
    LocalState
  > {
    constructor(props: Omit<P, keyof FirestoreComponentProps<T>>) {
      super(props);
      this.state = {
        db: firestore.ref(),
      };
    }

    componentWillMount() {
      const { db } = this.state;
      switch (db.kind) {
        case firestore.Status.OK:
          this.setState({
            updateListener: query(db.ref).onSnapshot(snapshot => {
              this.setState({
                data: snapshot.docs.map(doc => transform(doc)),
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

    render() {
      const { data } = this.state;
      return <Comp data={data} {...this.props} />;
    }
  }

  return WithFirestoreComponent;
}
