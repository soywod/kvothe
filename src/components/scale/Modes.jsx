import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const renderScales = scales => scales.map((scale, index) => (
	<tr key={index}>
		{renderNotes(scale, index + 1)}
	</tr>
));

const renderNotes = (scale, mode) => ([
	<td key={mode} style={styles.cell}>Mode {mode}</td>,
	<td key={`${mode}-2`} className="text-right" style={styles.cell}>
		{scale.map((note, index) => (
			<span key={note.toString()} className="badge badge-primary" style={styles.note}>
		    {note.toString()}
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
			{props.note.name}
			{props.note.alt}
			{' '}
			{props.scaleName} modes
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
		fontSize  : 20,
		marginLeft: 5
	},
	cell: {
		verticalAlign: 'middle'
	}
};
