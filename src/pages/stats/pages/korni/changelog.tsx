import * as React from 'react';

import { KORNI_VERSION } from '../../../../core/index';

const ChangeLogView: React.SFC<{ changelog: string }> = props => {
  return (
    <pre>
      <code>{props.changelog}</code>
    </pre>
  );
};

interface State {
  changelog: string | null;
}

export default class ChangeLog extends React.Component<{}, State> {
  private static URI = `https://raw.githubusercontent.com/kornicameister/korni/${KORNI_VERSION}/CHANGELOG.md`;

  constructor(props: {}, state: State) {
    super(props, state);
    this.state = { changelog: null };
  }

  public componentDidMount() {
    fetch(ChangeLog.URI)
      .then((response: Response) => {
        return response.text();
      })
      .then((md: string) => {
        this.setState({ changelog: md });
      });
  }

  public render() {
    const { changelog } = this.state;
    return changelog == null ? null : <ChangeLogView changelog={changelog} />;
  }
}
