import * as React from 'react';
import { Chart, ChartColumn, PieChartOptions } from 'react-google-charts';

import Spinner from '../../../../common/spinner';
import { DataLoadingStage } from '../../../../core';
import { IViewProps, WakaTimeContainer } from './common';

class WakaTimeLangStatsView extends React.Component<IViewProps, any> {
  private chartOptions: PieChartOptions;
  private chartColumns: ChartColumn[];

  constructor(props: IViewProps, state: any) {
    super(props, state);

    this.chartOptions = {
      legend: 'none',
      title: 'Language usage'
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
  protected dataUrl: string = 'https://wakatime.com/share/@kornicameister/ee15ca55-8369-428f-bf34-50271ec3b022.json';

  public render() {
    return (
      <WakaTimeLangStatsView data={this.state.data} stage={this.state.stage} />
    );
  }
}
