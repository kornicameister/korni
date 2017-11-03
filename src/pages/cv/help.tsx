import * as React from 'react';

const CVHelp: React.SFC<{}> = (props) => {
  return (
    <div className='container-fluid'>
      <section className='column'>
        <div className='card border-dark mb-3'>
          <div className='card-header'>
            <p>Command list</p>
          </div>
          <div className='card-body'>
            <ul>
              <li><code>help</code> - display this page</li>
              <li><code>basic</code> - display basic details</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CVHelp;
