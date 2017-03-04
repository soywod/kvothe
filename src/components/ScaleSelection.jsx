import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import * as Scale from '../models/Scale.const';
import { ScaleNameContainer } from '../containers/scale/Name'

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
		
		<div style={styles.flexCenter}>
			<ScaleNameContainer name={Scale.MAJOR}/>
			<ScaleNameContainer name={Scale.MINOR_NATURAL}/>
			<ScaleNameContainer name={Scale.MINOR_HARMONIC}/>
			<ScaleNameContainer name={Scale.MINOR_MELODIC}/>
		</div>
	</ReactCSSTransitionGroup>
);

const styles = {
	flexCenter: {
		display       : 'flex',
		justifyContent: 'center',
		flexDirection : 'column',
		alignItems    : 'center'
	}
};
