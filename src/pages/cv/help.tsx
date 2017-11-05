import * as React from 'react';

import { Command } from '../cv-common';

const CVHelp: React.SFC<{}> = (props) => {
  return (
    <div className='container-fluid' aria-label='help'>
      <section className='col'>
        <div className='card border-dark mb-3'>
          <div className='card-header'>
            <p>Command list</p>
          </div>
          <div className='card-body'>
            <ul>
              <li><code>{Command.HELP}</code> - display this page</li>
              <li><code>{Command.BASIC}</code> - display basic details</li>
              <li><code>{Command.SKILLS}</code> - display skills</li>
              <li><code>{Command.EDUCATION}</code> - display education</li>
              <li><code>{Command.WORK}</code> - display where I work and have been working</li>
              <li><code>{Command.LANGUAGES}</code> - display languages</li>
              <li><code>{Command.PUBLICATIONS}</code> - display publications</li>
              <li><code>{Command.AWARDS}</code> - display awards</li>
              <li><code>{Command.INTERESTS}</code> - display what I am interested in</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CVHelp;
