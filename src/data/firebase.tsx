import * as React from 'react';

import * as firestore from './store';
import * as firestoreTypes from '@firebase/firestore-types';

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
  query: (db: firestoreTypes.FirebaseFirestore) => firestoreTypes.Query,
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
          query(db.ref)
            .get()
            .then(snapshot => {
              const newData = {};
              snapshot.forEach(doc => {
                newData[doc.id] = doc.data();
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
      const { db } = this.state;
      switch (db.kind) {
        case firestore.Status.OK:
          this.setState({
            updateListener: query(db.ref).onSnapshot(snapshot => {
              if (snapshot.size < 1) {
                return;
              }

              const newDocs: {
                [docId: string]: firestoreTypes.DocumentSnapshot;
              } = {};
              const modifiedDocs: {
                [docId: string]: firestoreTypes.DocumentSnapshot;
              } = {};
              const removedDocs: string[] = [];

              snapshot.docChanges.forEach(change => {
                if (change.type === 'added') {
                  newDocs[change.doc.id] = change.doc;
                }
                if (change.type === 'modified') {
                  modifiedDocs[change.doc.id] = change.doc;
                }
                if (change.type === 'removed') {
                  removedDocs.push(change.doc.id);
                }
              });

              const modifiedDocsKeys: string[] = Object.keys(modifiedDocs);
              const newDocsKeys: string[] = Object.keys(newDocs);
              this.setState(prevState => ({
                ...prevState,
                data: Object.keys(prevState.data)
                  .filter((docId: string) => !(docId in removedDocs))
                  .concat(newDocsKeys)
                  .reduce(
                    (data: FirestoreData, docId: string) => {
                      if (docId in modifiedDocsKeys) {
                        data[docId] = modifiedDocs[docId];
                      } else if (docId in newDocsKeys) {
                        data[docId] = newDocs[docId];
                      } else {
                        data[docId] = prevState.data[docId];
                      }
                      return data;
                    },
                    {} as FirestoreData,
                  ),
              }));
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
