import * as classnames from 'classnames';
import * as React from 'react';

import { ClickableCard } from '../../common/card';

import './skills.css';

interface State {
  selectedCardName?: string;
}

interface Props {
  skills: any[];
}

export default class CVSkills extends React.Component<Props, State> {

  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {};
  }

  public render() {
    const skills: any[] = this.props.skills as any[];
    const { selectedCardName } = this.state;

    if (!!selectedCardName) {
      const skill = skills.filter((s: any) => s.name === selectedCardName)[0];
      return (
        <div className='container fade show'>
          <h3>
            <span>{skill.name}</span>
            <a className='pull-right' onClick={() => this.setState({ selectedCardName: undefined })}>
              <i className='fa fa-fw fa-remove' aria-hidden='true'></i>
            </a>
          </h3>
          <hr />
          <div className='card border-dark mb-2'>
            <ul className='list-group list-group-flush'>
              {
                skill.keywords.map((kw: string, index: number) => {
                  return (
                    <li key={kw + skill.name}
                      className={classnames('list-group-item', {
                        'list-group-item-light': index % 2 !== 0,
                        'list-group-item-dark': index % 2 === 0
                      })}>{kw}</li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className='card-columns'>
          {
            skills.map((skill: any) => {
              return <ClickableCard label={skill.name} padding={2}
                onClick={() => this.setState({ selectedCardName: skill.name })} />;
            })
          }
        </div>
      );
    }
  }
}
