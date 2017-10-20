import * as React from 'react';
import { Table } from 'reactstrap';

import Spinner from '../../../common/spinner';

enum DataLoadingStage {
  LOADING,
  DONE,
  ERROR,
  NONE
}
interface ContainerData {
  lang: any
}
interface ContainerState {
  data: ContainerData,
  stage: DataLoadingStage
}

interface ViewProps {
  data: any,
  stage: DataLoadingStage
}

class WakaTimeLangStatsView extends React.Component<ViewProps, any> {

  render() {
    let { data, stage } = this.props;
    if (stage == DataLoadingStage.ERROR) {
      return (
        <div>Error</div>
      )
    } else if (stage == DataLoadingStage.DONE) {
      return (
        <Table responsive striped reflow hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Language</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {
              data
                .sort((a: any, b: any) => b.percent - a.percent)
                .map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index}</th>
                      <td>{item.name}</td>
                      <td>{item.percent}</td>
                    </tr>
                  )
                })
            }
          </tbody>
        </Table>
      )
    }
    return <Spinner />;
  }
}

export default class WakaTimeStats extends React.Component<any, ContainerState> {
  private static langUrl: string = 'https://wakatime.com/share/@8bae79b2-e7a7-4349-8a06-994ca85dc2c9/5f6db7e0-c492-4309-8b00-4f22d36a031f.json'

  constructor() {
    super()
    this.state = {
      data: {
        lang: null
      },
      stage: DataLoadingStage.NONE
    }
  }

  componentDidMount() {
    // NOTE(kornicameister) once there's more of content loaded from WakaTime
    // I need to make sure to wrap these somehow to change
    // the stage only if each of the fetches has completed
    // Maybe I will create wrapper around jsonp with Promises
    this.fetchLang();
  }

  fetchLang() {
    this.setState({
      stage: DataLoadingStage.LOADING
    });
    require('jsonp')(
      WakaTimeStats.langUrl,
      null,
      (err: any, data: any) => {
        if (err) {
          this.setState({
            stage: DataLoadingStage.ERROR,
            data: err
          });
        }
        this.setState({
          stage: DataLoadingStage.DONE,
          data: {
            lang: data.data
          }
        })
      }
    );
  }

  render() {
    return (
      <WakaTimeLangStatsView data={this.state.data.lang} stage={this.state.stage} />
    )
  }

}
