import * as React from 'react';
import { shallow } from 'enzyme';

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
const Query = jest.fn(() => {
  return {
    get: jest.fn(() => {
      return new Promise(jest.fn());
    }),
    onSnapshot: jest.fn(),
  };
});

describe('firebase', () => {
  it('should allow to use withFirestore', () => {
    withFirestore(
      class MockedFirestore extends React.Component<{} & FirestoreComponentProps> {
        render() {
          return null;
        }
      },
      () => Query(),
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
      () => Query(),
    );

    shallow(<MockedFirestoreWithFirestore foo={'test'} />);
  });
});
