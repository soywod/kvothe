import React from 'react';

import NoteSelection from '../note-selection/NoteSelection';

const HarmonizerComponent = props => (
  <div>
    <h1>
      <i className="fa fa-soundcloud icon-left" />
      Harmonizer
    </h1>

    {props.children}
  </div>
);

export default HarmonizerComponent;
