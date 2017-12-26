import * as classnames from 'classnames';
import * as React from 'react';

import './school.css';

interface School {
  institution: string;
  gpa: string;
  endDate: string;
  startDate: string;
  studyType: string;
}
interface Schools {
  [key: string]: School;
}

interface State {
  selected: string | null;
  schools: Schools;
}
interface Props {
  school: object[];
}
export default class CVSchool extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = { selected: '0', schools: this.mapSchools() };
  }

  private mapSchools(): Schools {
    const { school } = this.props;
    const mapped: Schools = {};
    school.forEach((s: object, key: number) => {
      mapped[key.toString()] = s as School;
    });
    return mapped;
  }

  private renderNav() {
    const { schools } = this.state;
    return (
      <div className="col-5">
        <nav className="cv-school-nav" aria-label="schools" role="navigation">
          <ul className="nav flex-column">
            {Object.keys(schools).map((key: string) => {
              const s = schools[key];
              return (
                <li key={'school' + key} className="nav-item">
                  <a
                    className={classnames('nav-link', {
                      active: this.state.selected === key,
                    })}
                    onClick={() => {
                      this.setState({
                        selected: key,
                      });
                    }}>
                    <div
                      className={classnames(
                        'card mb-1',
                        {
                          'border-dark text-dark': this.state.selected !== key,
                        },
                        {
                          'border-white text-white bg-dark': this.state.selected === key,
                        },
                      )}>
                      <div className="card-body">
                        <p className="card-text">{s.institution}</p>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }

  private renderSelected() {
    const { selected, schools } = this.state;
    if (selected === null) {
      return <div className="col" />;
    } else {
      const school = schools[selected];
      return (
        <div className="col">
          <div className="card mb-0">
            <div className="card-header">
              <p>
                {school.studyType} [{school.startDate} - {school.endDate}]
              </p>
            </div>
            <div className="card-body">{school.gpa}</div>
          </div>
        </div>
      );
    }
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderNav()}
          {this.renderSelected()}
        </div>
      </div>
    );
  }
}
