import React from 'react';
import { connect } from 'react-redux';

import { resetNote } from "../../actions/note";
import ScaleSelectionComponent from '../../components/mode-builder/ScaleSelection';

const mapStateToProps = state => ({
  noteName: state.note.name,
  noteAlt : state.note.alt
});

const mapDispatchToProps = {
  resetNote
};

const ScaleSelectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScaleSelectionComponent);

export default ScaleSelectionContainer;
