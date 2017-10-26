import * as React from 'react';

const WhatPulseStats: React.SFC<any> = () => {

  fetch('http://api.whatpulse.org/user.php?user=kornicameister')
    .then((resp: any) => {
      return resp.text();
    })
    .then((str: string) => {
      return new Promise((resolve, reject) => {
        const parseString = require('xml2js').parseString;
        parseString(str, (err: any | null, result: any) => {
          if (err) {
            return reject(err);
          }
          return resolve(result.WhatPulse);
        });
      });
    })
    .then((wp: any) => {
      return {
        keys: Number(wp.Ranks[0].Keys[0]),
        clicks: Number(wp.Ranks[0].Clicks[0])
      };
    });

  return (
    <div>WhatPulse</div>
  );
};

export default WhatPulseStats;
