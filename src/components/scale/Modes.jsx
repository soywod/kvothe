import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import t from '../../i18n/en';

const renderScales = scales => scales.map((scale, index) => (
	<tr key={index}>
		{renderNotes(scale, index + 1)}
	</tr>
));

const renderNotes = (scale, mode) => ([
	<td key={mode} style={styles.cell}>Mode {mode}</td>,
	<td key={`${mode}-2`} className="text-right" style={styles.cell}>
		{scale.map((note, index) => (
			<span key={note.name + note.alt} className="badge badge-primary" style={styles.note}>
		    {t(note.name)}
		    <sub>{t(note.alt)}</sub>
		  </span>
		))}
	</td>
]);

export const ScaleModesComponent = props => (
	<ReactCSSTransitionGroup
		transitionName="section"
		transitionEnterTimeout={300}
		transitionAppear={true}
		transitionAppearTimeout={300}
		transitionLeaveTimeout={300}>
		
		<h1 className="text-center">
			<Link to={`/${props.noteName}/${props.noteAlt}`}>
				<i className="fa fa-arrow-left"/>
			</Link>
			{' '}
			{t(props.noteName)}
			<sub>{t(props.noteAlt)}</sub>
			{' '}
			{t(props.scaleName).toLowerCase()} modes
		</h1>
		
		<br/>
		
		<table className="table table-bordered">
			<tbody>
				{renderScales(props.scales)}
			</tbody>
		</table>
	
	</ReactCSSTransitionGroup>
);

const styles = {
	note: {
		fontSize  : 18,
		marginLeft: 5
	},
	cell: {
		verticalAlign: 'middle'
	}
};
