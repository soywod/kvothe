import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as Bootstrap from 'reactstrap';

import NoteName from '../note-selection/NoteName';
import NoteAlt from '../note-selection/NoteAlt';
import { A, B, C, D, E, F, G } from '../const/NoteName'
import { FLAT, SHARP } from '../const/NoteAlt';

const NoteSelection = props => (
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
        <Bootstrap.ButtonGroup style={{...styles.buttonGroup, ...styles.firstButtonGroup}}>
          <NoteName name={A}/>
          <NoteName name={B}/>
          <NoteName name={C}/>
          <NoteName name={D}/>
          <NoteName name={E}/>
          <NoteName name={F}/>
          <NoteName name={G}/>
        </Bootstrap.ButtonGroup>
      </Bootstrap.Col>
    </Bootstrap.Row>

    <Bootstrap.Row>
      <Bootstrap.Col lg={styles.lg} md={styles.md}>
        <Bootstrap.ButtonGroup style={styles.buttonGroup}>
          <NoteAlt name={FLAT}/>
          <NoteAlt name={SHARP}/>
        </Bootstrap.ButtonGroup>
      </Bootstrap.Col>
    </Bootstrap.Row>

    <Bootstrap.Button color="primary" className="float-right">
      Next
      <i className="fa fa-chevron-circle-right icon-right"/>
    </Bootstrap.Button>
  </ReactCSSTransitionGroup>
);

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
    marginBottom: -1
  },
  buttonGroup     : {
    width       : '100%',
    display     : 'flex',
    marginBottom: 30
  }
};

export default NoteSelection;
