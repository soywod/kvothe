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

const ScaleModesComponent = props => (
  <div>
		<div className="jumbotron-fluid">
			<h1 className="display-4">
				<i className="fa fa-cubes"/> Mode builder
			</h1>

      <p className="lead">
        <a href="#" onClick={event => resetScale(event, props.resetScale)}>
          <i className="fa fa-arrow-left"/> Back
        </a>
			</p>

			<p className="lead">
				Scale selected:
        {' '}
        <span className="badge badge-primary">{t(props.noteName)}<sub>{t(props.noteAlt)}</sub></span>
        {' '}
        <span className="badge badge-success">{t(props.scaleName)}</span>
			</p>
		</div>

		<ReactCSSTransitionGroup
      transitionName="section"
      transitionEnterTimeout={0}
      transitionAppear={true}
      transitionAppearTimeout={0}
      transitionLeaveTimeout={0}>

			<table className="table table-bordered">
				<tbody>
					{renderScales(props.scales)}
				</tbody>
			</table>
		</ReactCSSTransitionGroup>
	</div>
);

const resetScale = (event, callback) => {
  event.preventDefault();
  callback();
};

ScaleModesComponent.propTypes = {
  noteName : React.PropTypes.string,
  noteAlt  : React.PropTypes.string,
  scaleName: React.PropTypes.string,

  resetScale: React.PropTypes.func.isRequired
};

const styles = {
  note: {
    fontSize  : 18,
    marginLeft: 5
  },
  cell: {
    verticalAlign: 'middle'
  }
};

export default ScaleModesComponent;
