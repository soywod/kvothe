import React from 'react';
import { connect } from 'react-redux';

import { selectName } from "../../actions/scale";
import { ScaleNameComponent } from '../../components/scale/Name';

const mapStateToProps = state => ({
	stateName: state.scale.name
});

const mapDispatchToProps = (dispatch, params) => ({
	selectName: name => dispatch(selectName(name))
});

export const ScaleNameContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ScaleNameComponent);
