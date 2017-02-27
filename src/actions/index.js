export const selectNote = note => ({
    type: 'SELECT_NOTE',
    note
});

export const selectAlt = alt => ({
    type: 'SELECT_ALT',
    alt
});

export const back = () => ({
    type: 'BACK'
});

export const fetchTone = (note, alt) => {
    return {
        type: 'FETCH_TONE',
        note,
        alt,
    }
};
