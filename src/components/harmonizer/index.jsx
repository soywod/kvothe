import React from 'react';

const Harmonizer = props => (
  <div>
    <h1>
      <i className="fa fa-soundcloud icon-left"/>
      Harmonizer
    </h1>

    {props.children}
  </div>
);

export default Harmonizer;
