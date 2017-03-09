import React from 'react';
import { connect } from 'react-redux';

import ModeBuilderComponent from '../../components/mode-builder';

const mapStateToProps = state => ({
  noteName : state.note.name,
  noteAlt  : state.note.alt,
  scaleName: state.scale.name
});

const ModeBuilderContainer = connect(
  mapStateToProps,
  null
)(ModeBuilderComponent);

export default ModeBuilderContainer;
