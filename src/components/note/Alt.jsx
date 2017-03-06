import React from 'react';

import { styles } from './styles';

export const NoteAltComponent = props => (
	<button
		type="button"
		className={'btn btn-lg ' + (props.alt === props.stateAlt ? 'btn-primary' : 'btn-secondary')}
		style={styles.button}
		onClick={() => props.toggleNoteAlt(props.alt)}>
    {props.alt}
  </button>
);

NoteAltComponent.propTypes = {
	alt     : React.PropTypes.string.isRequired,
	stateAlt: React.PropTypes.string,
	
	toggleNoteAlt: React.PropTypes.func.isRequired
};
