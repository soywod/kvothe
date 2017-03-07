import React from 'react';
import { connect } from 'react-redux';

import { setNoteName } from "../../actions/note";
import { navigateTo } from "../../actions/navigation";
import { NoteNameComponent } from '../../components/note/Name';

const mapStateToProps = state => ({
	stateName: state.note.name,
	stateAlt : state.note.alt
});

const mapDispatchToProps = dispatch => ({
	setNoteName: (name, uri) => dispatch(setNoteName(name)) && dispatch(navigateTo(uri))
});

export const NoteNameContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteNameComponent);
