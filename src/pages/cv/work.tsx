import * as moment from 'moment';
import * as React from 'react';

const DATE_FORMAT = 'DD-MM-YYYY';

const CVWork: React.SFC<{ work: object }> = (props) => {
  const work = props.work as any[];

  // replace all dates with proper date object first
  work.forEach((w) => {
    const eDate: string = w.endDate;
    w.startDate = moment(w.startDate);
    w.endDate = eDate ? moment(eDate) : 'now';
  });
  work.sort((a, b): number => {
    return moment(a.startDate).diff(b.startDate);
  });

  return (
    <div className='container-fluid'>
      <div id='work-accordion' role='tablist' aria-label='work'>
        {
          work.map((w: any, key: number) => {
            return (
              <section id={'collapse' + key} key={key} className='col collapse show'>
                <div className='card border-dark mb-3 text-justify'>
                  <div className='card-header' aria-label='company'>
                    <h4 className='mb-0 pull-left'><a href={w.website}>{w.company}</a></h4>
                    <a className='pull-right' data-toggle='collapse' href={'#collapse' + key} aria-expanded='true' aria-controls={'collapse' + key}>!</a>
                  </div>
                  <div className='card-header' aria-label='dates'>
                    <h5 className='mb-0'>{moment(w.startDate).format(DATE_FORMAT)} - {moment(w.endDate).format(DATE_FORMAT)}</h5>
                  </div>
                  <div className='card-header' aria-label='position'>
                    <h6 className='mb-0'>{w.position}</h6>
                  </div>
                  {w.summary && (<div className='card-body'>
                    <p className='card-text'>
                      {w.summary}
                    </p>
                  </div>
                  )}
                  {
                    w.highlights && w.highlights.map((h: any, hKey: number) => {
                      return (
                        <ul key={hKey * key} className='list-group list-group-flush'>
                          <li className='list-group-item'><span className='card-text'>{h}</span></li>
                        </ul>
                      );
                    })
                  }
                </div>
              </section>
            );
          })
        }
      </div>
    </div>
  );
};

export default CVWork;
