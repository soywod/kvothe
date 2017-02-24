export const SELECT_NOTE = 'SELECT_NOTE';

export function selectNote(note) {
    return {
        type: SELECT_NOTE,
        activeNote: note
    };
}
