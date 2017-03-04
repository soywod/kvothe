export const selectNote = note => ({
	type: 'SELECT_NOTE',
	note
});

export const selectScale = scale => ({
	type: 'SELECT_SCALE',
	scale
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
