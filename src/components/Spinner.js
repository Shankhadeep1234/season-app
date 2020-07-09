import React from 'react';

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.msg}</div>
    </div>
  );
};

Spinner.defaultProps = {
  msg: 'Loading',
};

export default Spinner;
