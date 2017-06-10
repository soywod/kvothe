// @flow

import React from 'react';
import {Link} from 'react-router';
import {Button, Col, Row} from 'reactstrap';

import type {NoteName, NoteAlt} from './Note.type';
import NoteNameComponent from './NoteName';
import NoteAltComponent from './NoteAlt';
import label from '../helpers/label';

type State = {
  noteName: NoteName | null;
  noteAlt: NoteAlt;
};

class NoteSelectionComponent extends React.Component {
  state: State;

  constructor(props: any) {
    super(props);

    this.state = {
      noteName: null,
      noteAlt: 'NATURAL',
    };

    this.selectNoteName = this.selectNoteName.bind(this);
    this.selectNoteAlt  = this.selectNoteAlt.bind(this);
  }

  selectNoteName = (noteName: NoteName) => {
    this.setState({noteName});
  }

  selectNoteAlt = (noteAlt: NoteAlt) => {
    this.setState(prevState => ({
      noteAlt: prevState.noteAlt === noteAlt ? 'NATURAL' : noteAlt
    }));
  }

  getNextPath() {
    const noteName = (this.state.noteName || 'C').toLowerCase();
    const noteAlt = this.state.noteAlt.toLowerCase();

    return `/harmonizer/${noteName}/${noteAlt}`;
  }

  renderNoteNames() {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(noteName => (
      <NoteNameComponent
        key={noteName}
        name={noteName}
        alt={this.state.noteAlt}
        active={noteName === this.state.noteName}
        selectNoteName={this.selectNoteName}
      />
    ));
  }

  renderNoteAlts() {
    return ['FLAT', 'SHARP'].map(noteAlt => (
      <NoteAltComponent
        key={noteAlt}
        alt={noteAlt}
        active={noteAlt === this.state.noteAlt}
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
            disabled={! this.state.noteName}>
            Next
            <i className="fa fa-arrow-right icon-right"/>
          </Button>
        </div>

        <Row>
          <Col lg={styles.lg} md={styles.md}>
            <div style={{ ...styles.buttonGroup, ...styles.firstButtonGroup }}>
              {this.renderNoteAlts()}
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={styles.lg} md={styles.md}>
            <div style={styles.buttonGroup}>
              {this.renderNoteNames()}
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

