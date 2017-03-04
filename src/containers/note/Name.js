import React from 'react';
import { connect } from 'react-redux';

import { selectName } from "../../actions/note";
import { NoteNameComponent } from '../../components/note/Name';

const mapStateToProps = state => ({
	stateName: state.note.name,
	stateAlt : state.note.alt
});

const mapDispatchToProps = dispatch => ({
	selectName: name => dispatch(selectName(name))
});

export const NoteNameContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteNameComponent);
