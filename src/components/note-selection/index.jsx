import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Button, Col, Row } from 'reactstrap';

import NoteName from './NoteName';
import NoteAlt from './NoteAlt';
import { A, B, C, D, E, F, G } from '../../const/NoteName'
import { FLAT, NATURAL, SHARP } from '../../const/NoteAlt';

class NoteSelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteAlt: NATURAL
    };

    this.selectNoteName = this.selectNoteName.bind(this);
    this.selectNoteAlt  = this.selectNoteAlt.bind(this);
  }

  selectNoteName(noteName) {
    this.setState({ noteName });
  }

  selectNoteAlt(noteAlt) {
    this.setState(prevState => ({
      noteAlt: prevState.noteAlt === noteAlt ? NATURAL : noteAlt
    }));
  }

  renderNoteNames() {
    return [A, B, C, D, E, F, G].map(noteName => (
      <NoteName
        key={noteName}
        name={noteName}
        alt={this.state.noteAlt}
        active={noteName === this.state.noteName}
        selectNoteName={this.selectNoteName}/>
    ));
  }

  renderNoteAlts() {
    return [FLAT, SHARP].map(noteAlt => (
      <NoteAlt
        key={noteAlt}
        name={noteAlt}
        active={noteAlt === this.state.noteAlt}
        selectNoteAlt={this.selectNoteAlt}/>
    ));
  }

  render() {
    return (
      <div>
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
            to={`/harmonizer/${this.state.noteName}/${this.state.noteAlt}`}
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

export default NoteSelection;
