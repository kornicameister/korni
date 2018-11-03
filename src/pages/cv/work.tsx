import classnames from 'classnames';
import * as moment from 'moment';
import * as React from 'react';

const DATE_FORMAT = 'DD-MM-YYYY';

const CVWork: React.SFC<{ work: object }> = props => {
  const work = props.work as any[];

  // replace all dates with proper date object first
  work.forEach(w => {
    const eDate: string = w.endDate;
    w.startDate = moment(w.startDate);
    w.endDate = eDate ? moment(eDate) : 'now';
  });
  work.sort(
    (a, b): number => {
      return moment(b.startDate).diff(a.startDate);
    },
  );

  return (
    <div id="work-accordion" role="tablist" aria-label="work" className="container-fluid">
      {work.map((w: any, row: number) => {
        return (
          <section key={row} className="col">
            <div className="card border-dark mb-3 text-justify">
              <div
                id={'cv-work-heading-' + row}
                className="card-header"
                aria-label="company">
                <h4 className="mb-0 pull-left">
                  {w.position} [
                  <a href={w.website} aria-label={w.company} target="_blank">
                    {w.company}
                  </a>
                  ]
                </h4>
                <a
                  className="pull-right"
                  href={'#cv-work-collapse' + row}
                  data-toggle="collapse"
                  aria-expanded={row === 0}
                  aria-controls={'collapse' + row}>
                  <i className="fa fa-fw fa-circle-o" aria-hidden="true" />
                </a>
              </div>
              <span
                id={'cv-work-collapse' + row}
                className={classnames('collapse', { show: row === 0 })}
                aria-labelledby={'cv-work-heading-' + row}
                data-parent="#work-accordion">
                <div className="card-header" aria-label="dates">
                  <h5 className="mb-0">
                    {moment(w.startDate).format(DATE_FORMAT)} -{' '}
                    {moment(w.endDate).format(DATE_FORMAT)}
                  </h5>
                </div>
                {w.summary && (
                  <div className="card-body">
                    <p className="card-text">{w.summary}</p>
                  </div>
                )}
                {w.highlights &&
                  w.highlights.map((h: any, hKey: number) => {
                    return (
                      <ul key={hKey * row} className="list-group list-group-flush">
                        <li className="list-group-item">
                          <span className="card-text">{h}</span>
                        </li>
                      </ul>
                    );
                  })}
              </span>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default CVWork;
