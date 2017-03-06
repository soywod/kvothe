import React from 'react';
import { connect } from 'react-redux';

import { toggleNoteAlt } from "../../actions/note";
import { NoteAltComponent } from '../../components/note/Alt';

const mapStateToProps = state => ({
	stateName: state.note.name,
	stateAlt : state.note.alt
});

const mapDispatchToProps = dispatch => ({
	toggleNoteAlt: alt => dispatch(toggleNoteAlt(alt))
});

export const NoteAltContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteAltComponent);
