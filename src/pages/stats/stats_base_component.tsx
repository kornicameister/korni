import * as React from 'react'
import { Collapse, Button, CardBlock, Card } from 'reactstrap';

interface Props {
  live?: boolean;
  reload?: number;
}

interface State {
  collapse: boolean
}

const DEFAULT_COLLAPSE:boolean = false;

export default abstract class BaseStats extends React.Component<Props, State> {
  static defaultProps = {
    live: false,
    reload: 60
  }

  constructor(props:Props, state:State){
    super(props, state);

    this.toggle.bind(this);

    this.state = {
      collapse: DEFAULT_COLLAPSE
    };

  }

  abstract renderContent(): any;

  abstract renderLabel(): any;

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={() => this.toggle()}>{this.renderLabel()}</Button>
        <Collapse isOpen={this.state.collapse} navbar>
          <Card>
            <CardBlock>{this.renderContent()}</CardBlock>
          </Card>
        </Collapse>
      </div>
    )
  }

}
