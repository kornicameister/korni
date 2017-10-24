import * as classnames from 'classnames';
import * as React from 'react';

import WakaTimeEditor from './wakatime/editor';
import WakaTimeLang from './wakatime/lang';
import WakaTimeOS from './wakatime/os';

type Stat = 'editor' | 'lang' | 'os';
interface IWakaTimeStatsState {
  chunks: {
    editor: boolean;
    lang: boolean;
    os: boolean;
  };
}

const StatButton: React.SFC<{
  id: Stat;
  label: string;
  active: boolean;
  onClick: React.MouseEventHandler<any>;
}> = ({ id, label, active, onClick }) => {
  const btnClasses = classnames('btn', {
    active: active,
    'btn-dark': active,
    'btn-secondary': !active
  });
  return (
    <button type="button" className={btnClasses} onClick={onClick}>
      {label}
    </button>
  );
};

export default class WakaTimeStats extends React.Component<
  any,
  IWakaTimeStatsState
> {
  constructor(props: any, state: IWakaTimeStatsState) {
    super(props, state);
    this.state = {
      chunks: {
        editor: false,
        lang: false,
        os: false
      }
    };
  }

  public render() {
    const btnGroupWrapperStyle = {
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
            <StatButton
              id="lang"
              label="Language"
              active={this.state.chunks.lang}
              onClick={() => this.toggle('lang')}
            />
            <StatButton
              id="editor"
              label="Editor"
              active={this.state.chunks.editor}
              onClick={() => this.toggle('editor')}
            />
            <StatButton
              id="os"
              label="OS"
              active={this.state.chunks.os}
              onClick={() => this.toggle('os')}
            />
          </div>
        </div>
        <div>
          // NOTE(kornicameister) rework all to be charts later on
          <WakaTimeLang visible={this.state.chunks.lang} />
          <WakaTimeEditor visible={this.state.chunks.editor} />
          <WakaTimeOS visible={this.state.chunks.os} />
        </div>
      </div>
    );
  }

  private toggle(chunk: Stat) {
    this.setState({
      chunks: {
        editor: chunk === 'editor',
        lang: chunk === 'lang',
        os: chunk === 'os'
      }
    });
  }
}
