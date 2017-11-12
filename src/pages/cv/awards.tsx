import * as React from 'react';

interface Award {
  awarder: string;
  date: string;
  summary: string;
  title: string;
}

const CVAwards: React.SFC<{ awards: Award[] }> = (props) => {
  const { awards } = props;
  return (
    <div className='container'>
      {
        awards.map((award: Award, index: number) => {
          return (
            <div key={'award-' + index} className='card dark-border mb-2'>
              <div className='card-header'>
                <h5 className='card-title text-success pull-left'>{award.title} in {award.date}</h5>
                <h5 className='card-subtitle pull-right'>{award.awarder}</h5>
              </div>
              <div className='card-body'>
                <div className='card-text'>{award.summary}</div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default CVAwards;
