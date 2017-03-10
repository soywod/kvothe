import React from 'react';
import { Link } from 'react-router';
import * as Bootstrap from 'reactstrap';
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
      <Bootstrap.Badge color="primary" key={note.name + note.alt} style={styles.note}>
		    {t(note.name)}
        <sub>{t(note.alt)}</sub>
		  </Bootstrap.Badge>
    ))}
	</td>
]);

const ScaleModesComponent = props => (
  <ReactCSSTransitionGroup
    transitionName="section"
    transitionEnterTimeout={0}
    transitionAppear={true}
    transitionAppearTimeout={0}
    transitionLeaveTimeout={0}>

    <h1>
      <a href="#" onClick={event => resetScale(event, props.resetScale)}>
        <i className="fa fa-arrow-left"/>
      </a> Mode builder
    </h1>

    <p className="lead">
      Scale selected:
      {' '}
      <Bootstrap.Badge color="primary">{t(props.noteName)}<sub>{t(props.noteAlt)}</sub></Bootstrap.Badge>
      {' '}
      <Bootstrap.Badge color="success">{t(props.scaleName)}</Bootstrap.Badge>
    </p>

    <Bootstrap.Table bordered>
      <tbody>
        {renderScales(props.scales)}
      </tbody>
    </Bootstrap.Table>
  </ReactCSSTransitionGroup>
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
