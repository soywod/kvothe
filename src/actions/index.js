export const selectNote = note => ({
    type: 'SELECT_NOTE',
    note
});

export const selectAlt = alt => ({
    type: 'SELECT_ALT',
    alt
});

export const harmonize = () => ({
    type : 'HARMONIZE'
});
