import React from 'react';

import t from '../../i18n/en';
import { styles } from './styles';

export const NoteNameComponent = props => (
	<button
		type="button"
		className={'btn btn-lg btn-secondary' + (props.name === props.stateName ? ' active' : '')}
		style={styles.button}
		onClick={() => props.setNoteName(props.name, `/${props.name}/${props.stateAlt}`)}>
		{t(props.name)}
		<sub>{t(props.stateAlt)}</sub>
	</button>
);

NoteNameComponent.propTypes = {
	name     : React.PropTypes.string.isRequired,
	stateName: React.PropTypes.string,
	stateAlt : React.PropTypes.string,
	
	setNoteName: React.PropTypes.func.isRequired
};
