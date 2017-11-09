import * as React from 'react';

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
        <div className='container'>
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
                skill.keywords.map((kw: string) => {
                  return (
                    <li key={kw + skill.name} className='list-group-item'>{kw}</li>
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
              return (
                <div className='card border-dark clickable mb-2' onClick={() => this.setState({ selectedCardName: skill.name })}>
                  <div className='card-body'>
                    <div className='card-title'>{skill.name}</div>
                  </div>
                </div>
              );
            })
          }
        </div>
      );
    }
  }
}
