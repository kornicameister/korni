import * as firebase from 'firebase/app';
import * as firebaseTypes from '@firebase/app-types';
import * as firebaseStoreTypes from '@firebase/firestore-types';

import 'firebase/auth';
import 'firebase/firestore';

const app: firebaseTypes.FirebaseApp | undefined = firebase.initializeApp(
  {
    apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
    messagingSenderId: process.env.REACT_APP_FIRESTORE_SENDER_ID,
    authDomain: `${process.env.REACT_APP_FIRESTORE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.REACT_APP_FIRESTORE_PROJECT_ID}.firebaseio.com`,
    projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID,
    storageBucket: `${process.env.REACT_APP_FIRESTORE_PROJECT_ID}.appspot.com`,
  },
  process.env.REACT_APP_FIRESTORE_PROJECT_ID,
);

export const enum FirestoreState {
  OK,
  Err,
}

interface OKFirestore {
  kind: FirestoreState.OK;
  ref: firebaseStoreTypes.FirebaseFirestore;
}

interface ErrFirestore {
  kind: FirestoreState.Err;
  message: string;
}

export type Firestore = OKFirestore | ErrFirestore;

export const firestore = (): Firestore => {
  if (app && app.firestore) {
    return {
      kind: FirestoreState.OK,
      ref: app.firestore(),
    };
  }
  return {
    kind: FirestoreState.Err,
    message: 'Failed to initialize Firestore',
  };
};
