import { browserHistory } from 'react-router';
import * as Alt from '../models/Alt.const';

export const note = (state = {}, action) => {
	switch (action.type) {
		case 'SELECT_NAME': {
			const name = action.name;
			const alt  = state.alt;
			
			browserHistory.push(`/${name}/${alt}/`);
			
			return {
				name,
				alt
			};
		}
		
		case 'SELECT_ALT': {
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
