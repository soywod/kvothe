export const setNoteName = name => ({
  type: 'SET_NOTE_NAME',
  name
});

export const resetNote = () => ({
  type: 'RESET_NOTE',
});

export const toggleNoteAlt = alt => ({
  type: 'TOGGLE_NOTE_ALT',
  alt
});
