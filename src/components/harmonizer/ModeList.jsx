import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash/fp';
import { browserHistory, Link, Router } from 'react-router';
import { Button, Card, ListGroup, ListGroupItem } from 'reactstrap';

import Mode from './Mode';
import Note from '../../model/Note.class';
import Scale from '../../model/Scale.class';
import label from '../../helpers/label';
import { SCALES } from '../../const/Scale';

class ModeList extends React.Component {
  constructor(props) {
    super(props);

    const scale = this.computeScale(props);

    this.state = {
      scale,
      allModes     : scale.buildAllModes(),
      isModeRefOpen: false
    };

    this.toggleModeRef = this.toggleModeRef.bind(this);
  }

  toggleModeRef(event) {
    event.preventDefault();

    this.setState(prevState => ({
      isModeRefOpen: ! prevState.isModeRefOpen
    }));
  }

  computeScale(props) {
    const formula = props.params.formula;
    const note    = Note.getInstance(props.params.noteName, props.params.noteAlt);

    return Scale.getInstance({ note, formula });
  }

  renderMainReferences() {
    return this.state.allModes
      .filter(mode => mode !== null)
      .filter(mode => SCALES.indexOf(mode.getName()) !== - 1)
      .filter(mode => this.state.scale.formula !== mode.formula)
      .map((mode, index) => (
        <div key={index}>
          <Card style={styles.mode}>
            <ListGroup flush>
              <ListGroupItem color="warning" className="text-center">
                <h5>
                  {label(mode.note.name)}
                  <sub>{label(mode.note.alt)}</sub>{' '}
                  {label(mode.getName())}{' '}
                  scale
                </h5>
              </ListGroupItem>

              <ListGroupItem>
                <Mode mode={mode}/>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </div>
      ));
  }

  renderOtherReferences() {
    return this.state.allModes
      .filter(mode => mode !== null)
      .filter(mode => SCALES.indexOf(mode.getName()) === - 1)
      .filter(mode => this.state.scale.formula !== mode.formula)
      .map((mode, index) => (
        <div key={index} className={this.state.isModeRefOpen ? 'show' : 'hide'}>
          <Card style={styles.mode}>
            <ListGroup flush>
              <ListGroupItem color="danger" className="text-center">
                <h5>
                  {label(mode.note.name)}
                  <sub>{label(mode.note.alt)}</sub>{' '}
                  {label(mode.getName())}{' '}
                  scale
                </h5>
              </ListGroupItem>

              <ListGroupItem>
                <Mode mode={mode}/>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </div>
      ));
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
            to={`/harmonizer/${this.state.scale.note.name}/${this.state.scale.note.alt}`}>
            <i className="fa fa-arrow-left icon-left"/>
            Back
          </Button>
        </div>

        <Card style={styles.mode}>
          <ListGroup flush>
            <ListGroupItem color="info" className="text-center">
              <h5>
                {label(this.state.scale.note.name)}
                <sub>{label(this.state.scale.note.alt)}</sub>{' '}
                {label(this.state.scale.getName())}{' '}
                scale
              </h5>
            </ListGroupItem>

            <ListGroupItem>
              <Mode mode={this.state.scale}/>
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

export default ModeList;
