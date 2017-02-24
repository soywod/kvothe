import { browserHistory } from 'react-router';
import * as Note from '../models/Note.class';

export const toneReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_NOTE': {
            const note  = (action.note === state.note ? undefined : action.note);
            const alt   = state.alt;
            const ready = !!(note && alt);

            return {
                note,
                alt,
                ready
            };
        }

        case 'SELECT_ALT': {
            const note  = state.note;
            const alt   = (action.alt === state.alt ? null : action.alt);
            const ready = !!(note && alt);

            return {
                note,
                alt,
                ready
            };
        }

        case 'HARMONIZE': {
            browserHistory.push(`/${state.note.toLowerCase()}/${state.alt.toLowerCase()}/`);
            return state;
        }

        default: {
            return state;
        }
    }
};
