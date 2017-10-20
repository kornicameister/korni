import * as React from 'react';

export enum DataLoadingStage {
  LOADING,
  DONE,
  ERROR,
  NONE
}

export interface ContainerState {
  data: any;
  stage: DataLoadingStage;
}

export interface ContainerProps {
  visible: boolean;
}

export interface ViewProps {
  data: any;
  stage: DataLoadingStage;
}

export abstract class WakaTimeContainer extends React.Component<
  ContainerProps,
  ContainerState
> {
  protected dataUrl: string;
  protected label: string;

  constructor(dataUrl: string, label: string) {
    super();

    this.state = {
      data: null,
      stage: DataLoadingStage.NONE
    };
    this.dataUrl = dataUrl;
    this.label = label;
  }

  render() {
    if (this.props.visible) {
      return this.renderContent();
    }
    return null;
  }

  componentWillReceiveProps(props: ContainerProps) {
    if (props.visible && this.state.stage != DataLoadingStage.DONE) {
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
          stage: DataLoadingStage.ERROR,
          data: err
        });
      }
      this.setState({
        stage: DataLoadingStage.DONE,
        data: data.data
      });
    });
  }
}
