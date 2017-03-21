import React from 'react';
import { connect } from 'react-redux';

import { toggleNoteAlt } from "../../actions/note";
import NoteAltComponent from '../../components/mode-builder/NoteAlt';

const mapStateToProps = state => ({
  stateName: state.note.name,
  stateAlt : state.note.alt
});

const mapDispatchToProps = dispatch => ({
  toggleNoteAlt: alt => dispatch(toggleNoteAlt(alt))
});

const NoteAltContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteAltComponent);

export default NoteAltContainer;
