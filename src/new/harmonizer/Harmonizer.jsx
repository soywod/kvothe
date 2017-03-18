import React from 'react';

import NoteSelection from '../note-selection/NoteSelection';

const HarmonizerComponent = props => (
  <div>
    <h1>
      <i className="fa fa-soundcloud icon-left" />
      Harmonizer
    </h1>

    <NoteSelection />
  </div>
);

export default HarmonizerComponent;
