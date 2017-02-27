import { browserHistory } from 'react-router';
import { getToneInstance } from '../models/Note.class';

export const toneReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_NOTE': {
            const note = action.note;
            const alt = state.alt || 'NATURAL';

            browserHistory.push(`/${note.toLowerCase()}/${alt.toLowerCase()}/`);

            return {
                note,
                alt,
                tone: state.tone
            };
        }

        case 'SELECT_ALT': {
            const note = state.note;
            const alt = (action.alt === state.alt ? null : action.alt);

            return {
                note,
                alt,
                tone: state.tone
            };
        }

        case 'BACK': {
            browserHistory.push('/');

            return {
                note: state.tone ? state.tone.note : null,
                alt: state.tone ? state.tone.alt : null,
                tone: state.tone
            };
        }

        case 'FETCH_TONE': {
            const tone = getToneInstance(action.note, action.alt);

            return {
                note: tone.note,
                alt: tone.alt,
                tone
            };
        }

        default: {
            return state;
        }
    }
};
