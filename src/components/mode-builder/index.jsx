import React from 'react';

import ModeListContainer from '../../containers/mode-builder/ModeList'
import NoteSelectionContainer from '../../containers/mode-builder/NoteSelection'
import ScaleSelectionContainer from '../../containers/mode-builder/ScaleSelection'

const ModeBuilderComponent = props => {
  if (!props.noteName) {
    return <NoteSelectionContainer />;
  }
  else if (!props.scaleName) {
    return <ScaleSelectionContainer />;
  }
  else {
    return <ModeListContainer />;
  }
};

export default ModeBuilderComponent;
