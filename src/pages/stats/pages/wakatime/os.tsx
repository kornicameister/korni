import * as React from 'react';
const Chart = require('react-google-charts').Chart;

import Spinner from '../../../../common/spinner';
import { DataLoadingStage, IChartColumn, IViewProps, WakaTimeContainer } from './common';
class WakaTimeOSStatsView extends React.Component<IViewProps, any> {
  private chartOptions: any;
  private chartColumns: IChartColumn[];

  constructor(props: IViewProps, state: any) {
    super(props, state);

    this.chartOptions = {
      hAxis: { title: 'OS' },
      legend: 'none',
      title: 'OS usage',
      vAxis: { title: '%' }
    };
    this.chartColumns = [
      {
        label: 'OS',
        type: 'string'
      },
      {
        label: 'Usage',
        type: 'number'
      }
    ];
  }

  public render() {
    const { data, stage } = this.props;
    if (stage === DataLoadingStage.ERROR) {
      return <div>{data}</div>;
    } else if (stage === DataLoadingStage.DONE) {
      const rows: any[][] = data
        .map((item: any) => {
          return [item.name as string, item.percent as number];
        });
      return (
        <Chart
          chartType='PieChart'
          rows={rows}
          columns={this.chartColumns}
          options={this.chartOptions}
          graph_id='OSUsage'
          width={'100%'}
          height={'400px'}
          legend_toggle
        />
      );
    }
    return <Spinner />;
  }
}

export default class WakaTimeOS extends WakaTimeContainer {
  private static langUrl: string = 'https://wakatime.com/share/@8bae79b2-e7a7-4349-8a06-994ca85dc2c9/0a071cb8-c48f-468a-b7ef-b15188acca75.json';

  constructor() {
    super(WakaTimeOS.langUrl);
  }

  public render() {
    return (
      <WakaTimeOSStatsView data={this.state.data} stage={this.state.stage} />
    );
  }
}
