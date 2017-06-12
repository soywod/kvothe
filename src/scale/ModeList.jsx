// @flow

import React from 'react';
import _ from 'lodash/fp';
import {browserHistory, Link, Router} from 'react-router';
import {Button, Card, ListGroup, ListGroupItem} from 'reactstrap';

import ModeComponent from './Mode';
import Note from '../note/Note.class';
import Scale from '../scale/Scale.class';
import label from '../helpers/label';
import {SCALES} from './Scale.const';

import noteRepository from '../note/Note.repository';
import scaleRepository from './Scale.repository';

type State = {
  scale: Scale;
  modes: Array<Scale|null>;
  isModeRefOpen: boolean;
}

class ModeListComponent extends React.Component {
  state: State;

  constructor(props: any) {
    super(props);

    const {formula, noteId} = props.params;
    const note = noteRepository.getById(noteId);
    if (! note) throw new Error(`Error while getting note from note id '${noteId}'`);

    const scale = scaleRepository.getScaleByFormula(note, formula);
    if (! scale) throw new Error(`Error while getting scale from formula '${formula}'`);

    const modes = scaleRepository.getModesFromScale(scale);
    if (! modes) throw new Error(`Error while getting modes from scale`);

    this.state = {
      scale,
      modes,
      isModeRefOpen: false
    };

    this.toggleModeRef = this.toggleModeRef.bind(this);
  }

  toggleModeRef = (event: any) => {
    event.preventDefault();

    this.setState(prevState => ({
      isModeRefOpen: ! prevState.isModeRefOpen
    }));
  }

  renderMainReferences() {
    return this.state.modes
      .filter(mode => mode && SCALES.includes(mode.formula))
      .map((mode, index) => {
        if (! mode || mode.formula === this.state.scale.formula) {
          return null;
        }

        return (
          <div key={index}>
            <Card style={styles.mode}>
              <ListGroup flush>
                <ListGroupItem color="warning" className="text-center">
                  <h5>
                    {label(mode.tone.name)}
                    <sub>{label(mode.tone.alt)}</sub>{' '}
                    {label(mode.formula)}{' '}
                    scale
                  </h5>
                </ListGroupItem>

                <ListGroupItem>
                  <ModeComponent mode={mode}/>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </div>
        );
      })
      .filter(mode => !! mode);
  }

  renderOtherReferences() {
    return this.state.modes
      .filter(mode => mode && ! SCALES.includes(mode.formula))
      .map((mode, index) => {
        if (! mode || mode.formula === this.state.scale.formula) {
          return null;
        }

        if (! this.state.isModeRefOpen) {
          return null;
        }

        return (
          <div key={index}>
            <Card style={styles.mode}>
              <ListGroup flush>
                <ListGroupItem color="danger" className="text-center">
                  <h5>
                    {label(mode.tone.name)}
                    <sub>{label(mode.tone.alt)}</sub>{' '}
                    {label(mode.formula)}{' '}
                    scale
                  </h5>
                </ListGroupItem>

                <ListGroupItem>
                  <ModeComponent mode={mode}/>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </div>
        );
      })
      .filter(mode => !! mode);
  }

  render() {
    return (
      <div className="animated-container">
        <div className="lead">
          Harmonization result :
        </div>
        <div className="navigation">
          <Button
            tag={Link}
            to={`/harmonizer/${this.state.scale.tone.id}`}>
            <i className="fa fa-arrow-left icon-left"/>
            Back
          </Button>
        </div>

        <Card style={styles.mode}>
          <ListGroup flush>
            <ListGroupItem color="info" className="text-center">
              <h5>
                {label(this.state.scale.tone.name)}
                <sub>{label(this.state.scale.tone.alt)}</sub>{' '}
                {label(this.state.scale.formula)}{' '}
                scale
              </h5>
            </ListGroupItem>

            <ListGroupItem>
              <ModeComponent mode={this.state.scale}/>
            </ListGroupItem>
          </ListGroup>
        </Card>

        <br/>

        <h3>Scale references</h3>
        {this.renderMainReferences()}

        <br/>

        <a href="#" style={styles.modeRef} onClick={this.toggleModeRef}>
          <h3>
            <i className={`fa fa-caret-${this.state.isModeRefOpen ? 'down' : 'right'} icon-left`} style={styles.caretModeRef}/>
            Mode references
          </h3>
        </a>
        {this.renderOtherReferences()}
      </div>
    );
  }
}

const styles = {
  container   : {
    display: 'flex'
  },
  mode        : {
    marginBottom: 20
  },
  badge       : {
    marginRight: 5
  },
  buttonGroup : {
    width       : '100%',
    textAlign   : 'left',
    marginBottom: 30
  },
  modeRef     : {
    padding: 0,
  },
  caretModeRef: {
    width: 15
  }
};

export default ModeListComponent;

