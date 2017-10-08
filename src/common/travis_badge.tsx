import * as React from 'react';

export const TRAVIS_ID: string = 'https://travis-ci.org/kornicameister/korni';

export default class TravisBadge extends React.Component {
  render() {
    let url: string = `${TRAVIS_ID}.svg?branch=master`;
    let alt: string = 'Travis Status'

    return (
      <a id="travis_badge" href={TRAVIS_ID}>
        <img alt={alt} src={url} className="img-fluid"></img>
      </a>
    )
  }
}
