import React from 'react';
import { connect } from 'react-redux';

import { selectNote, selectAlt } from "../actions";
import { ToneSelectionComponent } from '../components/ToneSelection';

const mapStateToProps = state => ({
    note: state.note,
    alt: state.alt,
    tone: state.tone
});

const mapDispatchToProps = dispatch => ({
    onSelectNote: note => dispatch(selectNote(note)),
    onSelectAlt: alt => dispatch(selectAlt(alt))
});

export const ToneSelectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToneSelectionComponent);
