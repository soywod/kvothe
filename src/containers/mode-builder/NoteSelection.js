import React from 'react';
import { connect } from 'react-redux';

import NoteSelectionComponent from '../../components/mode-builder/NoteSelection';

const NoteSelectionContainer = connect()(NoteSelectionComponent);

export default NoteSelectionContainer;
