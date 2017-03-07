import React from 'react';
import { connect } from 'react-redux';

import { setNoteName } from "../../actions/note";
import { navigateTo } from "../../actions/navigation";
import { NoteNameComponent } from '../../components/note/Name';

let baseUri = '/';

const mapStateToProps = state => {
	baseUri = `/${state.note.alt}`;
	
	return {
		stateName: state.note.name,
		stateAlt : state.note.alt
	};
};

const mapDispatchToProps = dispatch => ({
	setNoteName: name => dispatch(setNoteName(name)) && dispatch(navigateTo(`${baseUri}/${name}`))
});

export const NoteNameContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteNameComponent);
