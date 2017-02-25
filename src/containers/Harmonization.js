import React from 'react';
import { connect } from 'react-redux';

import { HarmonizationComponent } from '../components/Harmonization';
import { getToneInstance } from '../models/Note.class';

const mapStateToProps = (state, props) => {
    if (state.tone) {
        return {
            tone: state.tone
        };
    }

    let tone  = getToneInstance(props.params.note, props.params.alt);
    const alt = tone.keySignature().length ? tone.keySignature()[0].alt : 'NATURAL';

    return {
        tone: (tone.alt !== 'NATURAL' && tone.alt !== alt ? tone.twin() : tone)
    };
};

const mapDispatchToProps = dispatch => ({
    getTone: (note, alt) => dispatch(selectNote(note))
});

export const HarmonizationContainer = connect(
    mapStateToProps,
    null
)(HarmonizationComponent);
