import React from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import * as Scale from '../../models/Scale.const';
import ScaleNameContainer from '../../containers/mode-builder/ScaleName'
import t from '../../i18n/en'

const ScaleSelectionComponent = props => (
  <ReactCSSTransitionGroup
    transitionName="section"
    transitionEnterTimeout={0}
    transitionAppear={true}
    transitionAppearTimeout={0}
    transitionLeaveTimeout={0}>

    <h1>
      <a href="#" onClick={event => resetNote(event, props.resetNote)}>
        <i className="fa fa-arrow-left"/>
      </a> Mode builder
    </h1>

    <p className="lead">
      Note selected: <span className="badge badge-primary">{t(props.noteName)}<sub>{t(props.noteAlt)}</sub></span>
      <br/>
      Now, select a scale formula :
    </p>

    <div style={styles.flexCenter}>
      <ScaleNameContainer name={Scale.MAJOR}/>
      <ScaleNameContainer name={Scale.MINOR_NATURAL}/>
      <ScaleNameContainer name={Scale.MINOR_HARMONIC}/>
      <ScaleNameContainer name={Scale.MINOR_MELODIC}/>
    </div>
  </ReactCSSTransitionGroup>
);

const resetNote = (event, callback) => {
  event.preventDefault();
  callback();
};

ScaleSelectionComponent.propTypes = {
  noteName: React.PropTypes.string,
  noteAlt : React.PropTypes.string,

  resetNote: React.PropTypes.func.isRequired
};

const styles = {
  flexCenter: {
    display       : 'flex',
    justifyContent: 'center',
    flexDirection : 'column',
    alignItems    : 'center'
  }
};

export default ScaleSelectionComponent;
