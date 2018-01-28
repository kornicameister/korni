import * as React from 'react';
import { shallow } from 'enzyme';

import { withCollection, FirestoreComponentProps } from './firebase';

const mockedFirestore = {
  kind: 1,
  ref: {
    collection: () => {
      return {
        onSnapshot: () => {
          return;
        },
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
    withCollection(
      class MockedFirestore extends React.Component<
        {} & FirestoreComponentProps<string[]>
      > {
        render() {
          return null;
        }
      },
      () => Query(),
      db => [],
    );
  });
  it('should allow to render component without firebase prop', () => {
    interface MockedFirestoreProps {
      foo: string;
    }
    const MockedFirestoreWithFirestore = withCollection(
      class MockedFirestoreA extends React.Component<
        MockedFirestoreProps & FirestoreComponentProps<string[]>
      > {
        render() {
          return null;
        }
      },
      () => Query(),
      db => [],
    );
    shallow(<MockedFirestoreWithFirestore foo={'test'} />);
  });
});
