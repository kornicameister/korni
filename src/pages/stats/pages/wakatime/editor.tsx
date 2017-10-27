import * as React from 'react';
import { Chart, ChartColumn, PieChartOptions } from 'react-google-charts';

import Spinner from '../../../../common/spinner';
import { DataLoadingStage } from '../../../../core';
import { IViewProps, WakaTimeContainer } from './common';

class WakaTimeEditorView extends React.Component<IViewProps, any> {
  private chartOptions: PieChartOptions;
  private chartColumns: ChartColumn[];

  constructor(props: IViewProps, state: any) {
    super(props, state);

    this.chartOptions = {
      legend: 'none',
      title: 'Editor/IDE usage'
    };
    this.chartColumns = [
      {
        label: 'Editor',
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
      return <div>Error</div>;
    } else if (stage === DataLoadingStage.DONE) {
      const rows: any[][] = data
        .filter((item: any) => {
          return item.name !== 'Chrome';
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
          graph_id='EditorUsage'
          width={'100%'}
          height={'400px'}
          legend_toggle
        />
      );
    }
    return <Spinner />;
  }
}

export default class WakaTimeEditor extends WakaTimeContainer {
  private static langUrl: string = 'https://wakatime.com/share/@8bae79b2-e7a7-4349-8a06-994ca85dc2c9/9aa6e2cb-1b51-4087-bf14-0d7526d9c908.json';

  constructor() {
    super(WakaTimeEditor.langUrl);
  }

  public render() {
    return (
      <WakaTimeEditorView data={this.state.data} stage={this.state.stage} />
    );
  }
}
