import { combineReducers } from 'redux';
import { browserHistory } from 'react-router';

import { getToneInstance } from '../models/Note.class';
import { note } from './note';
import { scale } from './scale';

const old = (state = {}, action) => {
	switch (action.type) {
		/*
		 case 'SELECT_NOTE': {
		 const note = action.note;
		 const alt  = state.alt || 'NATURAL';
		 
		 browserHistory.push(`/${note.toLowerCase()}/${alt.toLowerCase()}/`);
		 
		 return {
		 note,
		 alt,
		 scale: state.scale,
		 tone : state.tone
		 };
		 }
		 
		 case 'SELECT_ALT': {
		 const note = state.note;
		 const alt  = (action.alt === state.alt ? null : action.alt);
		 
		 return {
		 note,
		 alt,
		 scale: state.scale,
		 tone : state.tone
		 };
		 }
		 
		 
		 case 'SELECT_SCALE': {
		 const note  = state.note;
		 const alt   = state.alt;
		 const scale = action.scale;
		 
		 browserHistory.push(`/${note.toLowerCase()}/${alt.toLowerCase()}/${scale.toLocaleString()}`);
		 
		 return {
		 note,
		 alt,
		 scale,
		 tone: state.tone
		 };
		 }
		 */
		
		case 'BACK': {
			browserHistory.push('/');
			
			return {
				note : state.tone ? state.tone.note : null,
				alt  : state.tone ? state.tone.alt : null,
				scale: state.scale,
				tone : state.tone
			};
		}
		
		case 'FETCH_TONE': {
			const tone = getToneInstance(action.note, action.alt);
			
			return {
				note : tone.note,
				alt  : tone.alt,
				scale: state.scale,
				tone
			};
		}
		
		default: {
			return state;
		}
	}
};

export const reducers = combineReducers({old, note, scale});
