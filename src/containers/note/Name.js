import React from 'react';
import { connect } from 'react-redux';

import { setNoteName, navigateToScaleSelection } from "../../actions/note";
import { NoteNameComponent } from '../../components/note/Name';

const mapStateToProps = state => ({
	stateName: state.note.name,
	stateAlt : state.note.alt
});

const mapDispatchToProps = dispatch => ({
	setNoteName: name => dispatch(setNoteName(name)) && dispatch(navigateToScaleSelection())
});

export const NoteNameContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteNameComponent);
