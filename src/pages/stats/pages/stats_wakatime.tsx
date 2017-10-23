import * as React from 'react';
import * as classnames from 'classnames';

import WakaTimeLang from './wakatime/lang';
import WakaTimeEditor from './wakatime/editor';
import WakaTimeOS from './wakatime/os';

type Stat = 'editor' | 'lang' | 'os';
interface State {
  chunks: {
    editor: boolean;
    lang: boolean;
    os: boolean;
  };
}

class StatButton {
  constructor(public id: Stat, public label: string, public active: boolean) {}
}

export default class WakaTimeStats extends React.Component<any, State> {
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
              new StatButton('lang', 'Language', this.state.chunks.lang),
              new StatButton('editor', 'Editor', this.state.chunks.editor),
              new StatButton('os', 'OS', this.state.chunks.os)
            ].map((btn: StatButton) => {
              let btnClasses = classnames('btn', {
                'btn-dark': btn.active,
                'btn-secondary': !btn.active,
                active: btn.active
              });
              return (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => this.toggle(btn.id)}
                  className={btnClasses}
                >
                  {btn.label}
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

  private toggle(chunk: Stat) {
    this.setState({
      chunks: {
        lang: chunk === 'lang',
        editor: chunk === 'editor',
        os: chunk === 'os'
      }
    });
  }
}
