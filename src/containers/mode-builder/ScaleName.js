import React from 'react';
import { connect } from 'react-redux';

import { selectScaleName } from "../../actions/scale";
import ScaleNameComponent from '../../components/mode-builder/ScaleName';

const mapStateToProps = state => ({
  stateName: state.scale.name
});

const mapDispatchToProps = {
  selectScaleName,
};

const ScaleNameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScaleNameComponent);

export default ScaleNameContainer;
