import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash/fp';
import { browserHistory, Link, Router } from 'react-router';
import { Badge, Button, CardGroup, Col, Row } from 'reactstrap';

import Mode from './Mode';
import Note from '../../model/Note.class';
import Scale from '../../model/Scale.class';
import label from '../../helpers/label';

class ModeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {scale: this.computeScale(props)};
  }

  componentWillReceiveProps(props) {
    this.setState({scale: this.computeScale(props)});
  }

  computeScale(props) {
    const formula = props.params.formula;
    const note    = Note.getInstance(props.params.noteName, props.params.noteAlt);

    return Scale.getInstance({note, formula});
  }

  renderModeNames() {
    const allModes = this.state.scale.buildAllModes();

    return allModes.map((mode, index) => (
      <Col key={index} lg="6" xs="12">
        <Mode index={index + 1} mode={mode}/>
      </Col>
    ));
  }

  render() {
    return (
      <div>
        <Row>
          {this.renderModeNames()}
        </Row>

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
