import * as React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

import WakaTimeLang from './wakatime/lang';
import WakaTimeEditor from './wakatime/editor';

export default class WakaTimeStats extends React.Component<any, any> {
  constructor() {
    super();

    this.state = {
      chunks: {
        editor: false,
        lang: false
      }
    };
  }

  render() {
    return (
      <div>
        <div>
          <ButtonGroup size="3">
            <Button onClick={() => this.toggle('lang')}>Languages</Button>
            <Button onClick={() => this.toggle('editor')}>Editor</Button>
          </ButtonGroup>
        </div>
        <div>
          <WakaTimeLang visible={this.state.chunks['lang']} />
          <WakaTimeEditor visible={this.state.chunks['editor']} />
        </div>
      </div>
    );
  }

  private toggle(chunk: string) {
    this.setState({
      chunks: {
        lang: chunk == 'lang',
        editor: chunk == 'editor'
      }
    });
  }
}
