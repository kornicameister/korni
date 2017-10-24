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

export interface IContainerProps {
  visible: boolean;
}

export interface IViewProps {
  data: any;
  stage: DataLoadingStage;
}

export abstract class WakaTimeContainer extends React.Component<
  IContainerProps,
  IContainerState
> {
  protected dataUrl: string;

  constructor(dataUrl: string) {
    super();

    this.state = {
      data: null,
      stage: DataLoadingStage.NONE
    };
    this.dataUrl = dataUrl;
  }

  public render() {
    if (this.props.visible) {
      return this.renderContent();
    }
    return null;
  }

  public componentWillReceiveProps(props: ContainerProps) {
    if (props.visible && this.state.stage !== DataLoadingStage.DONE) {
      this.fetchData();
    }
  }

  protected abstract renderContent(): any;

  private fetchData(): void {
    this.setState({
      stage: DataLoadingStage.LOADING
    });
    require('jsonp')(this.dataUrl, null, (err: any, data: any) => {
      if (err) {
        this.setState({
          data: err,
          stage: DataLoadingStage.ERROR
        });
      }
      this.setState({
        data: data.data,
        stage: DataLoadingStage.DONE
      });
    });
  }
}
