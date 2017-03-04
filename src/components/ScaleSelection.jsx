import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { ScaleEnum } from '../models/Scale.enum';

const styles = {
	flex       : {
		display       : 'flex',
		justifyContent: 'center'
	},
	scaleButton: {
		margin        : 3,
		width         : 192,
		height        : 60,
		boxSizing     : 'border-box',
		display       : 'flex',
		justifyContent: 'center',
		alignItems    : 'center'
	}
};

export const ScaleSelectionComponent = props => (
	<ReactCSSTransitionGroup
		transitionName="section"
		transitionEnterTimeout={300}
		transitionAppear={true}
		transitionAppearTimeout={300}
		transitionLeaveTimeout={300}>
	
		<h1 className="text-center">
			Pick a scale
		</h1>
		
		<br/>
		
		<div style={styles.flex}>
			<button
				type="button"
				className={'btn btn-lg btn-secondary' + (props.scale === ScaleEnum.MAJOR ? ' active' : '')}
				style={styles.scaleButton}
				onClick={() => props.onSelectScale(ScaleEnum.MAJOR)}>
				Major scale
			</button>
		</div>
	</ReactCSSTransitionGroup>
);

ScaleSelectionComponent.propTypes = {
	scale: React.PropTypes.string,
	
	onSelectScale: React.PropTypes.func.isRequired,
};
