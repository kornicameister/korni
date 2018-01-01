import * as React from 'react';
import { shallow } from 'enzyme';

import { withFirestore, FirestoreComponentProps } from './firebase';

const mockedFirestore = {
  kind: 'OK',
  ref: () => {},
};

jest.mock('./firestore', () => ({
  firestore: () => {
    return mockedFirestore;
  },
}));

describe('firebase', () => {
  it('should allow to use withFirestore', () => {
    const MockedFirestoreWithFirestore = withFirestore(
      class MockedFirestore extends React.Component<{} & FirestoreComponentProps> {
        render() {
          return null;
        }
      },
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
    );

    shallow(<MockedFirestoreWithFirestore foo={'test'} />);
  });
});
