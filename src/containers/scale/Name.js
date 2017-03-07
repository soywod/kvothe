import React from 'react';
import { connect } from 'react-redux';

import { selectScaleName } from "../../actions/scale";
import { navigateTo } from "../../actions/navigation";
import { ScaleNameComponent } from '../../components/scale/Name';

let baseUri;

const mapStateToProps = state => {
	baseUri = `/${state.note.alt}/${state.note.name}`;
	
	return {
		stateName: state.scale.name
	}
};

const mapDispatchToProps = dispatch => ({
	selectScaleName: name => dispatch(selectScaleName(name)) && dispatch(navigateTo(`${baseUri}/${name}`))
});

export const ScaleNameContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ScaleNameComponent);
