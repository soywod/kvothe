import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as Bootstrap from 'reactstrap';
import _ from 'lodash/fp';

import ModeSelectionItem from '../mode-selection/ModeSelectionItem';
import Note from '../model/Note.class';
import Scale from '../model/Scale.class';

class ModeSelection extends React.Component {
  constructor(props) {
    super(props);

    const formula = props.params.formula;
    const note    = Note.getInstance(props.params.noteName, props.params.noteAlt);
    const scale   = Scale.getInstance({note, formula});
    console.log(scale.buildAllModes());

    this.state = {scale};

    this.selectMode = this.selectMode.bind(this);
  }

  selectMode(mode) {
    this.setState({activeMode: mode});
  }

  renderModeNames() {
    return _.map(mode => (
      <ModeSelectionItem
        key={mode.id}
        name={mode.id}
        active={mode.id === this.state.activeMode.id}
        selectMode={this.selectMode}/>
    ))(this.state.modes);
  }

  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="section"
          transitionEnterTimeout={0}
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionLeaveTimeout={0}>

          <p className="lead">
            Pick a mode :
          </p>

          <Bootstrap.Row>
            <Bootstrap.Col lg={styles.lg} md={styles.md}>
              <div style={styles.buttonGroup}>
                {/*this.renderModeNames()*/}
              </div>
            </Bootstrap.Col>
          </Bootstrap.Row>
        </ReactCSSTransitionGroup>

        <div>
          <Bootstrap.Button
            tag={Link}
            to={`/harmonizer/${this.state.scale.note.name}/${this.state.scale.note.alt}`}
            color="link">
            <i className="fa fa-arrow-left icon-left"/>
            Back
          </Bootstrap.Button>

          <Bootstrap.Button
            tag={Link}
            to={`/harmonizer/${this.state.scale.note.name}/${this.state.scale.note.alt}/${this.state.scale.formula.name}`}
            color="primary"
            className="float-right"
            disabled={! this.state.activeMode}>
            Next
            <i className="fa fa-arrow-right icon-right"/>
          </Bootstrap.Button>
        </div>
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

  buttonGroup: {
    width       : '100%',
    textAlign   : 'left',
    marginBottom: 30
  }
};

export default ModeSelection;
