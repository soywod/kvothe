import { browserHistory } from 'react-router';

export const scale = (state = {}, action) => {
	switch (action.type) {
		case 'SELECT_SCALE': {
			const name = action.name;
			
			browserHistory.push(`${window.location.pathname}${name}`);
			
			return {
				name
			};
		}
		
		default: {
			return state;
		}
	}
};
