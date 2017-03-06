import { browserHistory } from 'react-router';

const scale = (state = {}, action) => {
	switch (action.type) {
		case 'SELECT_SCALE_NAME': {
			return {
				name: action.name
			};
		}
		
		case 'NAVIGATE_TO_MODE_LIST': {
			browserHistory.push(`${window.location.pathname}/${state.name}`);
			return state;
		}
		
		default: {
			return state;
		}
	}
};

export default scale;
