// @flow

import React from 'react';
import {Link} from 'react-router';
import {Button, Col, Row} from 'reactstrap';

import type {NoteName, NoteAlt} from './Note.type';
import Note from './Note.class';
import NoteNameComponent from './NoteName';
import NoteAltComponent from './NoteAlt';
import label from '../helpers/label';
import noteRepository from './Note.repository';

type State = {
  note: ?Note,
};

class NoteSelectionComponent extends React.Component {
  state: State;

  constructor(props: any) {
    super(props);

    this.state = {
      note: null,
    };

    this.selectNoteName = this.selectNoteName.bind(this);
    this.selectNoteAlt  = this.selectNoteAlt.bind(this);
  }

  selectNoteName = (noteName: NoteName) => {
    const newNoteAlt = this.state.note ? this.state.note.alt : 'NATURAL';
    const note = noteRepository.getByNameAndAlt(noteName, newNoteAlt)

    this.setState({note});
  }

  selectNoteAlt = (noteAlt: NoteAlt) => {
    const newNoteName = this.state.note ? this.state.note.name : 'C';
    const newNoteAlt = this.state.note && this.state.note.alt !== noteAlt
      ? noteAlt
      : 'NATURAL';

    const note = noteRepository.getByNameAndAlt(newNoteName, newNoteAlt);

    this.setState({note});
  }

  getNextPath(): string {
    return this.state.note
      ? `/harmonizer/${this.state.note.id.toLowerCase()}`
      : `/harmonizer`;
  }

  renderNoteNames() {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(noteName => (
      <NoteNameComponent
        key={noteName}
        name={noteName}
        alt={this.state.note ? this.state.note.alt : 'NATURAL'}
        active={this.state.note && noteName === this.state.note.name}
        selectNoteName={this.selectNoteName}
      />
    ));
  }

  renderNoteAlts() {
    return ['FLAT', 'SHARP'].map(noteAlt => (
      <NoteAltComponent
        key={noteAlt}
        alt={noteAlt}
        active={this.state.note && noteAlt === this.state.note.alt}
        disabled={! this.state.note}
        selectNoteAlt={this.selectNoteAlt}
      />
    ));
  }

  render() {
    return (
      <div className="animated-container">
        <p className="lead">
          Pick a note :
        </p>

        <div className="navigation">
          <Button
            tag={Link}
            to="/">
            <i className="fa fa-arrow-left icon-left"/>
            Back
          </Button>

          <Button
            tag={Link}
            to={this.getNextPath()}
            color="primary"
            className="float-right"
            disabled={! this.state.note || ! this.state.note.name}>
            Next
            <i className="fa fa-arrow-right icon-right"/>
          </Button>
        </div>

        <Row>
          <Col lg={styles.lg} md={styles.md}>
            <div style={{ ...styles.buttonGroup, ...styles.firstButtonGroup }}>
              {this.renderNoteNames()}
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={styles.lg} md={styles.md}>
            <div style={styles.buttonGroup}>
              {this.renderNoteAlts()}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const styles = {
  lg: {
    size  : 6,
    offset: 3
  },
  md: {
    size  : 8,
    offset: 2
  },

  firstButtonGroup: {
    marginTop   : 14,
    marginBottom: 4
  },
  buttonGroup     : {
    width       : '100%',
    display     : 'flex',
    marginBottom: 30
  }
};

export default NoteSelectionComponent;

