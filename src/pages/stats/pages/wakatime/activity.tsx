import * as React from 'react';
import { Chart, ChartColumn, LineChartOptions } from 'react-google-charts';

import Spinner from '../../../../common/spinner';
import { DataLoadingStage } from '../../../../core';
import { IViewProps, WakaTimeContainer } from './common';

class WakaTimeActivityView extends React.Component<IViewProps> {
  public render() {
    const { data, stage } = this.props;
    if (stage === DataLoadingStage.ERROR) {
      return <div>Error</div>;
    } else if (stage === DataLoadingStage.DONE) {
      const columns: ChartColumn[] = [
        { id: 'Date', label: 'Date', type: 'date' },
        { id: 'Coding for...', label: 'Coding for...', type: 'number' },
      ];
      const rows: any[][] = data.map((item: any, it: number) => {
        return [
          new Date(item.range.date),
          (item.grand_total.total_seconds as number) / 3600,
        ];
      });
      const chartOptions: LineChartOptions = {
        title: 'Coding activity',
        curveType: 'function',
        legend: { position: 'bottom' },
        hAxis: {
          format: 'dd.MM.yyyy',
        },
        vAxis: {
          format: '# h',
          minValue: 0,
          maxValue: rows
            .map((item: any[]) => item[1])
            .sort((a: number, b: number) => b - a)[0],
        },
      };

      return (
        <Chart
          chartType="LineChart"
          rows={rows}
          columns={columns}
          options={chartOptions}
          graph_id="coding_activity"
          width={'100%'}
          height={'400px'}
          legend_toggle
        />
      );
    }
    return <Spinner />;
  }
}

export default class WakaTimeActivity extends WakaTimeContainer {
  protected dataUrl: string = 'https://wakatime.com/share/@kornicameister/8e8cf819-5351-4b04-a8f1-e44da271d477.json';

  public render() {
    return <WakaTimeActivityView data={this.state.data} stage={this.state.stage} />;
  }
}
