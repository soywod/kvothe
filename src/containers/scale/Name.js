import React from 'react';
import { connect } from 'react-redux';

import { selectScaleName, navigateToModeList } from "../../actions/scale";
import { ScaleNameComponent } from '../../components/scale/Name';

const mapStateToProps = state => ({
	stateName: state.scale.name
});

const mapDispatchToProps = dispatch => ({
	selectScaleName: name => dispatch(selectScaleName(name)) && dispatch(navigateToModeList())
});

export const ScaleNameContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ScaleNameComponent);
