import * as React from 'react';

interface Interest {
  name: string;
  keywords: string[];
}

const CVInterests: React.SFC<{ interests: Interest[] }> = props => {
  const { interests } = props;
  return (
    <div className="container">
      <div className="row">
        {interests.map((i: Interest) => {
          return (
            <div key={i.name} className="col mb-2">
              <div className="text-center">
                <p className="text-capitalize text-info font-weight-bold">{i.name}</p>
                {i.keywords.map((keyword: string) => {
                  return <span className="badge badge-pill badge-dark">{keyword}</span>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CVInterests;
