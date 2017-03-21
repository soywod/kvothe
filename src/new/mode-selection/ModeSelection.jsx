import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as Bootstrap from 'reactstrap';

import NoteName from '../note-selection/NoteName';
import NoteAlt from '../note-selection/NoteAlt';
import { A, B, C, D, E, F, G } from '../const/NoteName'
import { FLAT, NATURAL, SHARP } from '../const/NoteAlt';
import { MAJOR, MINOR_NATURAL } from '../const/Scale';

import Note from '../model/Note.class';
import Scale from '../model/Scale.class';

class ModeSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let note = Note.getInstance(this.props.params.noteName, this.props.params.noteAlt);
    let scale = new Scale(note, this.props.params.scale);

    console.log(scale.buildAllModes());

    return (
      <ReactCSSTransitionGroup
        transitionName="section"
        transitionEnterTimeout={0}
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionLeaveTimeout={0}>
        <h2>MODE SELECTION</h2>
      </ReactCSSTransitionGroup>
    );
  }
}

export default ModeSelection;
