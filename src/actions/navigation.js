import { browserHistory } from 'react-router';

export const navigateTo = (uri) => {
	browserHistory.push(uri);
	
	return {
		type: 'NAVIGATE_TO'
	}
};
