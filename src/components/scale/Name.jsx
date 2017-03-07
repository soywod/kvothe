import React from 'react';

import t from '../../i18n/en';

export const ScaleNameComponent = props => (
	<div>
		<button
			type="button"
			className={'btn btn-lg btn-secondary' + (props.name === props.stateName ? ' active' : '')}
			style={styles.button}
			onClick={() => props.selectScaleName(props.name)}>
			{t(props.name)}
		</button>
	</div>
);

ScaleNameComponent.propTypes = {
	name     : React.PropTypes.string.isRequired,
	stateName: React.PropTypes.string,
	
	selectScaleName: React.PropTypes.func.isRequired
};

const styles = {
	button: {
		margin        : 3,
		width         : 192,
		height        : 60,
		boxSizing     : 'border-box',
		display       : 'flex',
		justifyContent: 'center',
		alignItems    : 'center'
	}
};