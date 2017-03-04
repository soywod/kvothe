import React from 'react';
import { connect } from 'react-redux';

import { selectScale } from "../actions";
import { ScaleSelectionComponent } from '../components/ScaleSelection';

const mapStateToProps = state => ({
	note : state.note,
	alt  : state.alt,
	scale: state.scale,
	tone : state.tone
});

const mapDispatchToProps = dispatch => ({
	onSelectScale: scale => dispatch(selectScale(scale))
});

export const ScaleSelectionContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ScaleSelectionComponent);
