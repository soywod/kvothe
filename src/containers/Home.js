import React from 'react';
import { connect } from 'react-redux';

import { resetNote } from "../actions/note";
import { resetScale } from "../actions/scale";
import HomeComponent from '../components/Home';

const mapDispatchToProps = {
  resetNote,
  resetScale,
};

const HomeContainer = connect(
  null,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
