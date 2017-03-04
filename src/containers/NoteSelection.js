import React from 'react';
import { connect } from 'react-redux';

import { selectNote, selectAlt } from "../actions";
import { NoteSelectionComponent } from '../components/NoteSelection';

const mapStateToProps = state => ({
	note : state.note,
	alt  : state.alt,
	scale: state.scale,
	tone : state.tone
});

const mapDispatchToProps = dispatch => ({
	onSelectNote: note => dispatch(selectNote(note)),
	onSelectAlt : alt => dispatch(selectAlt(alt))
});

export const NoteSelectionContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteSelectionComponent);
