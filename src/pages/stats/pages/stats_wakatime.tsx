import * as React from 'react';
import * as classnames from 'classnames';

import WakaTimeLang from './wakatime/lang';
import WakaTimeEditor from './wakatime/editor';
import WakaTimeOS from './wakatime/os';

type Stat = 'editor' | 'lang' | 'os';
interface WakaTimeStatsState {
  chunks: {
    editor: boolean;
    lang: boolean;
    os: boolean;
  };
}

interface StatButtonProps {
  id: Stat;
  label: string;
  active: boolean;
  onClick: React.MouseEventHandler<any>;
}

class StatButton extends React.Component<StatButtonProps, any> {
  constructor(props: StatButtonProps, state: any) {
    super(props, state);
  }

  render() {
    let btnClasses = classnames('btn', {
      'btn-dark': this.props.active,
      'btn-secondary': !this.props.active,
      active: this.props.active
    });
    return (
      <button type="button" className={btnClasses} onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}

export default class WakaTimeStats extends React.Component<
  any,
  WakaTimeStatsState
> {
  constructor(props: any, state: WakaTimeStatsState) {
    super(props, state);
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
