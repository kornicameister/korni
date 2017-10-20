import * as React from 'react';
import { Table } from 'reactstrap';

import Spinner from '../../../../common/spinner';

import { ViewProps, DataLoadingStage, WakaTimeContainer } from './common';

class WakaTimeEditorView extends React.Component<ViewProps, any> {
  render() {
    let { data, stage } = this.props;
    if (stage == DataLoadingStage.ERROR) {
      return <div>Error</div>;
    } else if (stage == DataLoadingStage.DONE) {
      return (
        <Table responsive striped reflow hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Editor</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {data
              .sort((a: any, b: any) => b.percent - a.percent)
              .map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{item.name}</td>
                    <td>{item.percent}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      );
    }
    return <Spinner />;
  }
}

export default class WakaTimeEditor extends WakaTimeContainer {
  private static langUrl: string = 'https://wakatime.com/share/@8bae79b2-e7a7-4349-8a06-994ca85dc2c9/568be270-731c-4a8c-b454-9e537a174642.json';
  private static label: string = 'Editors';

  constructor() {
    super(WakaTimeEditor.langUrl, WakaTimeEditor.label);
  }

  renderContent() {
    return (
      <WakaTimeEditorView data={this.state.data} stage={this.state.stage} />
    );
  }
}
