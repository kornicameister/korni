import * as React from 'react';

import './spinner.css';

const Spinner: React.SFC<any> = props => {
  return (
    <div className="spinner text-center">
      <i className="fa fa-fw fa-circle-o-notch fa-spin" aria-hidden="true" />
    </div>
  );
};

export default Spinner;
