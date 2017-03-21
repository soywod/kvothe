import React from 'react';
import { connect } from 'react-redux';

import { setNoteName } from "../../actions/note";
import NoteNameComponent from '../../components/mode-builder/NoteName';

const mapStateToProps = state => ({
  stateName: state.note.name,
  stateAlt : state.note.alt
});

const mapDispatchToProps = ({
  setNoteName
});

const NoteNameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteNameComponent);

export default NoteNameContainer;
