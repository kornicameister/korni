import * as React from 'react';
import { shallow } from 'enzyme';

import * as firestoreTypes from '@firebase/firestore-types';

import { withFirestore, FirestoreComponentProps } from './firebase';

const mockedFirestore = {
  kind: 1,
  ref: {
    collection: () => {
      return {
        onSnapshot: () => {},
      };
    },
  },
};

jest.mock('./store', () => ({
  Status: {
    OK: 1,
    Err: 2,
  },
  ref: () => {
    return mockedFirestore;
  },
}));

describe('firebase', () => {
  it('should allow to use withFirestore', () => {
    withFirestore(
      class MockedFirestore extends React.Component<{} & FirestoreComponentProps> {
        render() {
          return null;
        }
      },
      '',
      () => new Promise<firestoreTypes.QuerySnapshot>(() => {}),
    );
  });

  it('should allow to render component without firebase prop', () => {
    interface MockedFirestoreProps {
      foo: string;
    }

    const MockedFirestoreWithFirestore = withFirestore(
      class MockedFirestoreA extends React.Component<
        MockedFirestoreProps & FirestoreComponentProps
      > {
        render() {
          return null;
        }
      },
      '',
      () => new Promise<firestoreTypes.QuerySnapshot>(() => {}),
    );

    shallow(<MockedFirestoreWithFirestore foo={'test'} />);
  });
});
