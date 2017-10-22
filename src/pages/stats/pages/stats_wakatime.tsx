import * as React from 'react';
import * as classnames from 'classnames';

import WakaTimeLang from './wakatime/lang';
import WakaTimeEditor from './wakatime/editor';
import WakaTimeOS from './wakatime/os';

export default class WakaTimeStats extends React.Component<any, any> {
  constructor() {
    super();

    this.state = {
      chunks: {
        editor: false,
        lang: false,
        os: false
      }
    };
  }

  render() {
    let btnGroupWrapperStyle = {
      width: '200px'
    };
    return (
      <div>
        <div className="mx-auto" style={btnGroupWrapperStyle}>
          <div
            className={classnames('btn-group')}
            role="group"
            aria-label="WakaTime stats"
          >
            {[
              ['lang', 'Language', this.state.chunks.lang],
              ['editor', 'Editor', this.state.chunks.editor],
              ['os', 'OS', this.state.chunks.os]
            ].map(btn => {
              let btnClasses = classnames('btn', {
                'btn-dark': btn[2],
                'btn-secondary': !btn[2],
                active: btn[2]
              });
              return (
                <button
                  key={btn[0]}
                  type="button"
                  onClick={() => this.toggle(btn[0])}
                  className={btnClasses}
                >
                  {btn[1]}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          // NOTE(kornicameister) rework all to be charts later on
          <WakaTimeLang visible={this.state.chunks['lang']} />
          <WakaTimeEditor visible={this.state.chunks['editor']} />
          <WakaTimeOS visible={this.state.chunks['os']} />
        </div>
      </div>
    );
  }

  private toggle(chunk: string) {
    this.setState({
      chunks: {
        lang: chunk == 'lang',
        editor: chunk == 'editor',
        os: chunk == 'os'
      }
    });
  }
}
