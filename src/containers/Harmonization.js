import React from 'react';
import { connect } from 'react-redux';

import { HarmonizationComponent } from '../components/Harmonization';
import { back, fetchTone } from '../actions/index';
import { getToneInstance } from '../models/Note.class';

const mapStateToProps = (state, props) => {
	const tone = getToneInstance(props.params.note, props.params.alt);
	
	return {
		note : tone.note,
		alt  : tone.alt,
		scale: state.scale,
		tone
	};
};

const mapDispatchToProps = (dispatch, props) => {
	dispatch(fetchTone(props.params.note, props.params.alt));
	
	return {
		onBack: () => dispatch(back())
	};
};

export const HarmonizationContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(HarmonizationComponent);
