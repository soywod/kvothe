import React from 'react';
import { connect } from 'react-redux';

import { HarmonizationComponent } from '../components/Harmonization';
import { getToneInstance } from '../models/Note.class';

const mapStateToProps = (state, props) => ({
    // tone: state.tone
    tone: getToneInstance(props.params.note, props.params.alt)
});

export const HarmonizationContainer = connect(
    mapStateToProps,
    null
)(HarmonizationComponent);
