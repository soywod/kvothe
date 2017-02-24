import * as Note from '../models/Note.class';

export const toneReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_NOTE': {
            const note  = (action.note === state.note ? undefined : action.note);
            const alt   = state.alt;
            const ready = !!(note && alt);
            const tone  = ready ?
                Reflect.construct(Note[alt.charAt(0).toUpperCase() + alt.slice(1).toLowerCase() + note], []) :
                null;

            return {
                note,
                alt,
                ready,
                tone
            };
        }

        case 'SELECT_ALT': {
            const note  = state.note;
            const alt   = (action.alt === state.alt ? null : action.alt);
            const ready = !!(note && alt);
            const tone  = ready ?
                Reflect.construct(Note[alt.charAt(0).toUpperCase() + alt.slice(1).toLowerCase() + note], []) :
                null;

            return {
                note,
                alt,
                ready,
                tone
            };
        }

        case 'HARMONIZE': {
            console.log(state.tone.twin());
            return state;
        }

        default: {
            return state;
        }
    }
};
