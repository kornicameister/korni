import * as React from 'react';
import { Table } from 'reactstrap';

import Spinner from '../../../../common/spinner';

import { DataLoadingStage, IViewProps, WakaTimeContainer } from './common';

class WakaTimeLangStatsView extends React.Component<IViewProps, any> {
  public render() {
    const { data, stage } = this.props;
    if (stage === DataLoadingStage.ERROR) {
      return <div>{data}</div>;
    } else if (stage === DataLoadingStage.DONE) {
      return (
        <Table responsive striped reflow hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Language</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {data
              .sort((a: any, b: any) => b.percent - a.percent)
              .map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <th scope='row'>{index}</th>
                    <td>{item.name}</td>
                    <td>{item.percent}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      );
    }
    return <Spinner />;
  }
}

export default class WakaTimeLang extends WakaTimeContainer {
  private static langUrl: string = 'https://wakatime.com/share/@8bae79b2-e7a7-4349-8a06-994ca85dc2c9/5f6db7e0-c492-4309-8b00-4f22d36a031f.json';

  constructor() {
    super(WakaTimeLang.langUrl);
  }

  protected renderContent() {
    return (
      <WakaTimeLangStatsView data={this.state.data} stage={this.state.stage} />
    );
  }
}
