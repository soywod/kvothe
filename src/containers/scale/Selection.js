import React from 'react';
import { connect } from 'react-redux';

import { ScaleSelectionComponent } from '../../components/scale/Selection';
import { setNoteName, setNoteAlt } from '../../actions/note';

const mapDispatchToProps = (dispatch, props) => {
	dispatch(setNoteAlt(props.params.noteAlt));
	dispatch(setNoteName(props.params.noteName));
	
	return {};
};

const ScaleSelectionContainer = connect(
	null,
	mapDispatchToProps
)(ScaleSelectionComponent);

export default ScaleSelectionContainer;
