import * as React from 'react';

export enum DataLoadingStage {
  LOADING,
  DONE,
  ERROR,
  NONE
}

export interface IContainerState {
  data: any;
  stage: DataLoadingStage;
}

export interface IViewProps {
  data: any;
  stage: DataLoadingStage;
}

export abstract class WakaTimeContainer extends React.Component<any, IContainerState> {
  protected dataUrl: string;

  constructor(dataUrl: string) {
    super();

    this.state = {
      data: null,
      stage: DataLoadingStage.NONE
    };
    this.dataUrl = dataUrl;
  }

  public componentDidMount() {
    this.fetchData();
  }

  private fetchData(): void {
    this.setState({
      stage: DataLoadingStage.LOADING
    });

    require('jsonp')(this.dataUrl, null, (err: any, data: any) => {
      if (err || data.error) {
        this.setState({
          data: err || data.error,
          stage: DataLoadingStage.ERROR
        });
        return;
      }
      this.setState({
        data: data.data,
        stage: DataLoadingStage.DONE
      });
    });
  }
}
