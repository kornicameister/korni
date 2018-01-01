import * as React from 'react';

import * as firestore from './store';
import * as firestoreTypes from '@firebase/firestore-types';
import * as firebaseStoreTypes from '@firebase/firestore-types';

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

export function withFirestore<P extends FirestoreComponentProps>(
  Comp: React.ComponentClass<P> | React.StatelessComponent<P>,
  collectionPath: string,
  dataSelect: (
    db: firebaseStoreTypes.FirebaseFirestore,
    collectionPath: string,
  ) => Promise<firestoreTypes.QuerySnapshot>,
): React.ComponentClass<Omit<P, keyof FirestoreComponentProps>> {
  interface LocalState {
    db: firestore.Firestore;
    updateListener?: () => void;
    data: FirestoreData;
  }

  class WrappedComponent extends React.Component<
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
          dataSelect(db.ref, collectionPath).then(snapshot => {
            const newData = {};
            snapshot.docs.forEach(doc => {
              const data = doc.data;
              const id = doc.id;
              newData[id] = data;
            });
            this.setState({
              data: newData,
            });
          });
        case firestore.Status.Err:
          return;
      }
    }

    componentDidMount() {
      const { db, data } = this.state;
      switch (db.kind) {
        case firestore.Status.OK:
          this.setState({
            updateListener: db.ref.collection(collectionPath).onSnapshot(snapshot => {
              if (snapshot.size < 1) {
                return;
              }
              snapshot.docChanges.forEach(change => {
                if (change.type === 'added') {
                }
                if (change.type === 'modified') {
                }
                if (change.type === 'removed') {
                }
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

  return WrappedComponent;
}
