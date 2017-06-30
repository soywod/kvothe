// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory, Link, Router} from 'react-router';
import {Button, Card, ListGroup, ListGroupItem} from 'reactstrap';

import ScaleListItem from './ScaleListItem';
import Note from '../note/Note.class';
import Scale from '../scale/Scale.class';
import label from '../helpers/label';
import {SCALES} from './Scale.const';

import noteRepository from '../note/noteRepository';
import scaleRepository from './Scale.repository';

type Props = {
  noteId: string;
  formula: number;
  previous: () => string;
};

type State = {
  scale: Scale;
  modes: Array<Scale|null>;
  isModeRefOpen: boolean;
}

class ScaleList extends React.Component {
  state: State;

  constructor(props: Props) {
    super(props);

    const {formula, noteId} = props;
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
          <ListGroupItem key={index}>
            <ScaleListItem color="warning" mode={mode} />
          </ListGroupItem>
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

        return (
          <ListGroupItem key={index}>
            <ScaleListItem color="danger" mode={mode} />
          </ListGroupItem>
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
            to={this.props.previous()}>
            <i className="fa fa-arrow-left icon-left"/>
            Back
          </Button>
        </div>

        <Card style={styles.mode}>
          <ListGroup flush>
            <ListGroupItem color="info">
              <h5>Current scale</h5>
            </ListGroupItem>

            <ListGroupItem>
              <ScaleListItem color="primary" mode={this.state.scale}/>
            </ListGroupItem>
          </ListGroup>
        </Card>

        <br/>

        <Card style={styles.mode}>
          <ListGroup flush>
            <ListGroupItem color="warning">
              <h5>Famous modes reference</h5>
            </ListGroupItem>

            {this.renderMainReferences()}
          </ListGroup>
        </Card>

        <br/>

        <Card style={styles.mode}>
          <ListGroup flush>
            <ListGroupItem color="danger">
              <h5>Other modes reference</h5>
            </ListGroupItem>

            {this.renderOtherReferences()}
          </ListGroup>
        </Card>
      </div>
    );
  }
}

ScaleList.propTypes = {
  noteId: PropTypes.string.isRequired,
  formula: PropTypes.number.isRequired,
  previous: PropTypes.func.isRequired,
};

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

export default ScaleList;
