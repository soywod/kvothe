import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash/fp';
import { browserHistory, Link, Router } from 'react-router';
import { Button, Card, CardBlock } from 'reactstrap';

import Mode from './Mode';
import Note from '../../model/Note.class';
import Scale from '../../model/Scale.class';
import label from '../../helpers/label';
import { SCALES } from '../../const/Scale';

class ModeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { scale: this.computeScale(props) };
  }

  computeScale(props) {
    const formula = props.params.formula;
    const note    = Note.getInstance(props.params.noteName, props.params.noteAlt);

    return Scale.getInstance({ note, formula });
  }

  renderModeNames() {
    const allModes = this.state.scale.buildAllModes();
    console.log(allModes);
    return allModes
      .filter(mode => mode !== null)
      .filter(mode => SCALES.indexOf(mode.getName()) !== - 1)
      .filter(mode => this.state.scale.formula !== mode.formula)
      .map((mode, index) => (
        <div key={index}>
          <p className="lead">
            {label(mode.note.name)}
            <sub>{label(mode.note.alt)}</sub>{' '}
            {label(mode.getName())}{' '}
            scale
          </p>
          <Card style={styles.mode}>
            <CardBlock>
              <Mode mode={mode}/>
            </CardBlock>
          </Card>
        </div>
      ));
  }

  render() {
    return (
      <div>
        <h3>
          Scale selected
        </h3>

        <p className="lead">
          {label(this.state.scale.note.name)}
          <sub>{label(this.state.scale.note.alt)}</sub>{' '}
          {label(this.state.scale.getName())}{' '}
          scale
        </p>

        <Card style={styles.mode}>
          <CardBlock>
            <Mode mode={this.state.scale}/>
          </CardBlock>
        </Card>

        <h3>
          Main references
        </h3>

        {this.renderModeNames()}

        <div>
          <Button
            tag={Link}
            to={`/harmonizer/${this.state.scale.note.name}/${this.state.scale.note.alt}`}
            color="link">
            <i className="fa fa-arrow-left icon-left"/>
            Back
          </Button>
        </div>
      </div>
    );
  }
}

const styles = {
  container  : {
    display: 'flex'
  },
  mode       : {
    marginBottom: 20
  },
  badge      : {
    marginRight: 5
  },
  buttonGroup: {
    width       : '100%',
    textAlign   : 'left',
    marginBottom: 30
  }
};

export default ModeList;
