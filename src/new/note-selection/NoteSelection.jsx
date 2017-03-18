import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as Bootstrap from 'reactstrap';

import NoteName from '../note-selection/NoteName';
import NoteAlt from '../note-selection/NoteAlt';
import { A, B, C, D, E, F, G } from '../const/NoteName'
import { FLAT, NATURAL, SHARP } from '../const/NoteAlt';

class NoteSelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alt: NATURAL
    };

    this.selectNoteName = this.selectNoteName.bind(this);
    this.selectNoteAlt  = this.selectNoteAlt.bind(this);
  }

  selectNoteName(noteName) {
    this.setState({noteName});
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
      <ReactCSSTransitionGroup
        transitionName="section"
        transitionEnterTimeout={0}
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionLeaveTimeout={0}>

        <p className="lead">
          Get started by selecting a note bellow :
        </p>

        <Bootstrap.Row>
          <Bootstrap.Col lg={styles.lg} md={styles.md}>
            <div style={{...styles.buttonGroup, ...styles.firstButtonGroup}}>
              {this.renderNoteNames()}
            </div>
          </Bootstrap.Col>
        </Bootstrap.Row>

        <Bootstrap.Row>
          <Bootstrap.Col lg={styles.lg} md={styles.md}>
            <div style={styles.buttonGroup}>
              {this.renderNoteAlts()}
            </div>
          </Bootstrap.Col>
        </Bootstrap.Row>

        <Bootstrap.Button color="primary" className="float-right">
          Next
          <i className="fa fa-chevron-circle-right icon-right"/>
        </Bootstrap.Button>
      </ReactCSSTransitionGroup>
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
