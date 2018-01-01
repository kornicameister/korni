import * as React from 'react';

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
  firestore: firestore.Firestore;
}

export function withFirestore<P extends FirestoreComponentProps>(
  Comp: React.ComponentClass<P> | React.StatelessComponent<P>,
): React.ComponentClass<Omit<P, keyof FirestoreComponentProps>> {
  interface LocalState {
    ref: firestore.Firestore;
  }

  class WithFirestoreComponent extends React.Component<
    Omit<P, keyof FirestoreComponentProps>,
    LocalState
  > {
    constructor(props: Omit<P, keyof FirestoreComponentProps>) {
      super(props);
      this.state = {
        ref: firestore.ref(),
      };
    }
    componentWillMount() {}

    componentWillUnmount() {}

    render() {
      const { ref } = this.state;
      return <Comp firestore={ref} {...this.props} />;
    }
  }

  return WithFirestoreComponent;
}
