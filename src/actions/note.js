export const setNoteName = name => ({
	type: 'SET_NOTE_NAME',
	name
});

export const setNoteAlt = alt => ({
	type: 'SET_NOTE_ALT',
	alt
});

export const toggleNoteAlt = alt => ({
	type: 'TOGGLE_NOTE_ALT',
	alt
});

export const navigateToScaleSelection = () => ({
	type: 'NAVIGATE_TO_SCALE_SELECTION',
});
