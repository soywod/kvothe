import { combineReducers } from 'redux';

import note from './note';
import scale from './scale';

const reducers = combineReducers({note, scale});

export default reducers;
