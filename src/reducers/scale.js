import { browserHistory } from 'react-router';

const scale = (state = {}, action) => {
	switch (action.type) {
		case 'SELECT_SCALE_NAME': {
			const name = action.name;
			
			browserHistory.push(`${window.location.pathname}/${name}`);
			
			return {
				name
			};
		}
		
		default: {
			return state;
		}
	}
};

export default scale;
