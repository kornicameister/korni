import * as React from 'react';
import Spinner from './spinner';

describe('Spinner', () => {
  it('renders properly', () => {
    const el = <Spinner />;
    expect(el).toBeTruthy();
  });
});
