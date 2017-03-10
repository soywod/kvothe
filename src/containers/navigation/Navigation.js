import React from 'react';
import { connect } from 'react-redux';

import { resetNote } from "../../actions/note";
import { resetScale } from "../../actions/scale";
import NavigationComponent from '../../components/navigation/Navigation';

const mapDispatchToProps = {
  resetNote,
  resetScale,
};

const NavigationContainer = connect(
  null,
  mapDispatchToProps
)(NavigationComponent);

export default NavigationContainer;
