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
  protected dataUrl: string = 'https://wakatime.com/share/@kornicameister/084a7fed-951e-4c62-9871-208b7b55e4ab.json';

  public render() {
    return (
      <WakaTimeEditorView data={this.state.data} stage={this.state.stage} />
    );
  }
}
