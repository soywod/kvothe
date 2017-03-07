const scale = (state = {}, action) => {
	switch (action.type) {
		case 'SELECT_SCALE_NAME': {
			return {
				name: action.name
			};
		}
		
		default: {
			return state;
		}
	}
};

export default scale;
