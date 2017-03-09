const scale = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_SCALE_NAME': {
      return {
        name: action.name
      };
    }

    case 'RESET_SCALE': {
      return {
        name: null
      };
    }

    default: {
      return state;
    }
  }
};

export default scale;
