import * as Alt from '../models/Alt.const';

const note = (state = {}, action) => {
	switch (action.type) {
		case 'SET_NOTE_NAME': {
			return {
				name: action.name,
				alt : state.alt
			};
		}
		
		case 'SET_NOTE_ALT': {
			return {
				name: state.name,
				alt : action.alt
			};
		}
		
		case 'TOGGLE_NOTE_ALT': {
			return {
				name: state.name,
				alt : action.alt === state.alt ? Alt.NATURAL : action.alt
			};
		}
		
		default: {
			return state;
		}
	}
};

export default note;
