import * as React from 'react';
const Chart = require('react-google-charts').Chart;

import Spinner from '../../../../common/spinner';
import { DataLoadingStage, IChartColumn, IViewProps, WakaTimeContainer } from './common';

class WakaTimeLangStatsView extends React.Component<IViewProps, any> {
  private chartOptions: any;
  private chartColumns: IChartColumn[];

  constructor(props: IViewProps, state: any) {
    super(props, state);

    this.chartOptions = {
      hAxis: { title: 'Language' },
      legend: 'none',
      title: 'Language usage',
      vAxis: { title: '%' }
    };
    this.chartColumns = [
      {
        label: 'Language',
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
        .filter((item: any) => {
          return item.name !== 'Other';
        })
        .map((item: any) => {
          return [item.name as string, item.percent as number];
        });
      return (
        <Chart
          chartType='PieChart'
          rows={rows}
          columns={this.chartColumns}
          options={this.chartOptions}
          graph_id='LanguageUsage'
          width={'100%'}
          height={'400px'}
          legend_toggle
        />
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

  public render() {
    return (
      <WakaTimeLangStatsView data={this.state.data} stage={this.state.stage} />
    );
  }
}
