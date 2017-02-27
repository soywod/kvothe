import { browserHistory } from 'react-router';
import { getToneInstance } from '../models/Note.class';

export const toneReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_NOTE': {
            const note = action.note;
            const alt  = state.alt || 'NATURAL';

            browserHistory.push(`/${note.toLowerCase()}/${alt.toLowerCase()}/`);

            return {
                note,
                alt,
            };
        }

        case 'SELECT_ALT': {
            const note = state.note;
            const alt  = (action.alt === state.alt ? null : action.alt);

            return {
                note,
                alt
            };
        }

        default: {
            return state;
        }
    }
};
