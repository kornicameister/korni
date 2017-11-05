import * as moment from 'moment';
import * as React from 'react';

const DATE_FORMAT = 'DD-MM-YYYY';

const CVWork: React.SFC<{ work: object }> = (props) => {
  const work = props.work as any[];

  // replace all dates with proper date object first
  work.forEach((w) => {
    const eDate: string = w.endDate;
    w.endDate = eDate ? moment(eDate) : 'now';
  });
  work.sort((a, b) => {
    return moment(b.startDate).milliseconds() - moment(a.startDate).milliseconds();
  });

  return (
    <div className='container-fluid'>
      {
        work.map((w: any, key: number) => {
          return (
            <section key={key} className='col'>
              <div className='card border-dark mb-3'>
                <div className='card-header'>
                  <h2>{w.company}</h2>
                  <h3>{moment(w.startDate).format(DATE_FORMAT)} - {moment(w.endDate).format(DATE_FORMAT)}</h3>
                </div>
                <div className='card-body'>
                </div>
              </div>
            </section>
          );
        })
      }
    </div>
  );
};

export default CVWork;
