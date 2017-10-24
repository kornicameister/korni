import * as React from 'react';
import { Table } from 'reactstrap';

import Spinner from '../../../../common/spinner';

import { DataLoadingStage, IViewProps, WakaTimeContainer } from './common';

class WakaTimeOSStatsView extends React.Component<IViewProps, any> {
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
              <th>OS</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {data
              .sort((a: any, b: any) => b.percent - a.percent)
              .map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index}</th>
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

export default class WakaTimeOS extends WakaTimeContainer {
  private static langUrl: string = `https://wakatime.com/share/
      @8bae79b2-e7a7-4349-8a06-994ca85dc2c9/0a071cb8-c48f-468a-b7ef-b15188acca75.json`;

  constructor() {
    super(WakaTimeOS.langUrl);
  }

  protected renderContent() {
    return (
      <WakaTimeOSStatsView data={this.state.data} stage={this.state.stage} />
    );
  }
}
