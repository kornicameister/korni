import * as React from 'react';
import { Chart, ChartColumn, PieChartOptions } from 'react-google-charts';

import Spinner from '../../../../common/spinner';
import { DataLoadingStage } from '../../../../core';
import { IViewProps, WakaTimeContainer } from './common';

class WakaTimeOSStatsView extends React.Component<IViewProps, any> {
  private chartOptions: PieChartOptions;
  private chartColumns: ChartColumn[];

  constructor(props: IViewProps, state: any) {
    super(props, state);

    this.chartOptions = {
      legend: 'none',
      title: 'OS usage',
    };
    this.chartColumns = [
      {
        label: 'OS',
        type: 'string',
      },
      {
        label: 'Usage',
        type: 'number',
      },
    ];
  }

  public render() {
    const { data, stage } = this.props;
    if (stage === DataLoadingStage.ERROR) {
      return <div>{data}</div>;
    } else if (stage === DataLoadingStage.DONE) {
      const rows: any[][] = data.map((item: any) => {
        return [item.name as string, item.percent as number];
      });
      return (
        <Chart
          chartType="PieChart"
          rows={rows}
          columns={this.chartColumns}
          options={this.chartOptions}
          graph_id="OSUsage"
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
  protected dataUrl: string =
    'https://wakatime.com/share/@kornicameister/e1cf8cbb-220d-42a9-b636-a2e12d3a6850.json';

  public render() {
    return <WakaTimeOSStatsView data={this.state.data} stage={this.state.stage} />;
  }
}
