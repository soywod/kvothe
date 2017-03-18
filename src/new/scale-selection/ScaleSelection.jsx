import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as Bootstrap from 'reactstrap';

import NoteName from '../note-selection/NoteName';
import NoteAlt from '../note-selection/NoteAlt';
import { A, B, C, D, E, F, G } from '../const/NoteName'
import { FLAT, NATURAL, SHARP } from '../const/NoteAlt';

class ScaleSelection extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="section"
        transitionEnterTimeout={0}
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionLeaveTimeout={0}>

        <p className="lead">
          Pick a scale :
        </p>
      </ReactCSSTransitionGroup>
    );
  }
}

export default ScaleSelection;
