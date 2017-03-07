import React from 'react';
import { connect } from 'react-redux';

import { selectScaleName } from "../../actions/scale";
import { navigateTo } from "../../actions/navigation";
import { ScaleNameComponent } from '../../components/scale/Name';

const mapStateToProps = state => ({
	stateName: state.scale.name,
	baseUri: `/${state.note.name}/${state.note.alt}`
});

const mapDispatchToProps = dispatch => ({
	selectScaleName: (name, baseUri) => dispatch(selectScaleName(name)) && dispatch(navigateTo(`${baseUri}/${name}`))
});

export const ScaleNameContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ScaleNameComponent);
