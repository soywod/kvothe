import React from 'react';

import { styles } from './styles';
import * as Alt from '../../models/Alt.const';

export const NoteNameComponent = props => (
	<button
		type="button"
		className={'btn btn-lg btn-secondary' + (props.name === props.stateName ? ' active' : '')}
		style={styles.button}
		onClick={() => props.setNoteName(props.name)}>
		{props.name}
		{props.stateAlt !== Alt.NATURAL ? props.stateAlt : ''}
	</button>
);

NoteNameComponent.propTypes = {
	name     : React.PropTypes.string.isRequired,
	stateName: React.PropTypes.string,
	stateAlt : React.PropTypes.string,
	
	setNoteName: React.PropTypes.func.isRequired
};
