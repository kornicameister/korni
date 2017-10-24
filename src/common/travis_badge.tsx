import * as React from 'react';

export const TRAVIS_ID: string = 'https://travis-ci.org/kornicameister/korni';

export default class TravisBadge extends React.Component {
  public render() {
    const url: string = `${TRAVIS_ID}.svg?branch=master`;
    const alt: string = 'Travis Status';

    return (
      <a id="travis_badge" href={TRAVIS_ID}>
        <img alt={alt} src={url} className="img-fluid" />
      </a>
    );
  }
}
