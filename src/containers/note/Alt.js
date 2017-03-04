import React from 'react';
import { connect } from 'react-redux';

import { selectAlt } from "../../actions/note";
import { NoteAltComponent } from '../../components/note/Alt';

const mapStateToProps = state => ({
	stateName: state.note.name,
	stateAlt : state.note.alt
});

const mapDispatchToProps = dispatch => ({
	selectAlt: alt => dispatch(selectAlt(alt))
});

export const NoteAltContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteAltComponent);
