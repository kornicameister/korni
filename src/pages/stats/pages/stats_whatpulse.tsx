import * as classname from 'classnames';
import * as React from 'react';

import Spinner from '../../../common/spinner';
import { DataLoadingStage } from '../../../core';

interface Data {
  keys?: number;
  clicks?: number;
  uptime?: number;
}

interface LoaderState {
  data?: Data;
  error?: Error;
  stage: DataLoadingStage;
}

type ViewProps = LoaderState;

const WhatPulseView: React.SFC<ViewProps> = (props: ViewProps) => {
  const { data, error, stage } = props;
  if (stage === DataLoadingStage.ERROR) {
    return <div>{error}</div>;
  } else if (stage === DataLoadingStage.DONE && data) {
    return (
      <div className='d-flex flow-row'>
        {
          [
            ['fa-keyboard-o', data.keys, 'Rank: Keys'],
            ['fa-mouse-pointer', data.keys, 'Rank: Clicks'],
            ['fa-clock-o', data.uptime, 'Rank: Uptime']
          ].map((item: any[], key: number) => {

            const classes: string = classname('fa fa-lg fa-fw', item[0]);
            const value: number = item[1];
            const tooltip: string = item[2];

            return (
              <div key={key} className='p-5 mx-auto' data-toggle='tooltip' data-placement='bottom' title={tooltip}>
                <span className='d-flex align-middle'>
                  <i className={classes} aria-hidden={true}></i>
                  <div>{value}</div>
                </span>
              </div>
            );
          })
        }
      </div>
    );
  }
  return <Spinner />;
};

export default class WhatPulseStats extends React.Component<any, LoaderState> {

  constructor() {
    super();
    this.state = {
      stage: DataLoadingStage.NONE
    };
  }

  public componentDidMount() {
    this.fetchData();
  }

  public render() {
    return <WhatPulseView data={this.state.data} stage={this.state.stage} />;
  }

  private fetchData() {
    this.setState({ stage: DataLoadingStage.LOADING });
    fetch('http://api.whatpulse.org/user.php?user=kornicameister')
      .then((resp: any) => {
        return resp.text();
      })
      .then((str: string) => {
        return new Promise((resolve, reject) => {
          const parseString = require('xml2js').parseString;
          parseString(str, (err: any | null, result: any) => {
            if (err) {
              return reject(err as Error);
            }
            return resolve(result.WhatPulse);
          });
        });
      })
      .then((wp: any) => {
        return {
          keys: Number(wp.Ranks[0].Keys[0]),
          clicks: Number(wp.Ranks[0].Clicks[0]),
          uptime: Number(wp.Ranks[0].Uptime[0])
        };
      })
      .then((data) => {
        this.setState({
          data,
          stage: DataLoadingStage.DONE
        });
      })
      .catch((err: Error) => {
        this.setState({ stage: DataLoadingStage.ERROR, error: err });
      });
  }

}
