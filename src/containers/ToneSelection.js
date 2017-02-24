import React from 'react';
import { connect } from 'react-redux';

import { getToneInstance } from '../models/Note.class';
import { selectNote, selectAlt, harmonize } from "../actions";
import { ToneSelectionComponent } from '../components/ToneSelection';

const mapStateToProps = state => ({
    note : state.note,
    alt  : state.alt,
    ready: state.ready,
    tone : getToneInstance(state.note, state.alt)
});

const mapDispatchToProps = dispatch => ({
    onSelectNote: note => dispatch(selectNote(note)),
    onSelectAlt : alt => dispatch(selectAlt(alt)),
    onHarmonize : () => dispatch(harmonize())
});

export const ToneSelectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToneSelectionComponent);
