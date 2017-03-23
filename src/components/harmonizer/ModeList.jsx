import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash/fp';
import { browserHistory, Link, Router } from 'react-router';
import { Badge, Button, Col, Row } from 'reactstrap';

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
      <Mode key={index} mode={mode}/>
    ));
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
            {'Note: '}
            <Badge pill color="primary">
              {label(this.state.scale.note.name)}
              <sub>{label(this.state.scale.note.alt)}</sub>
            </Badge>
          </p>

          <p className="lead">
            {'Scale: '}
            <Badge color="default">
              {label(this.state.scale.getName()) || '?'}
            </Badge>
          </p>

          <p className="lead">
            {'Intervals: '}
            {_
              .concat(this.state.scale.intervals, this.state.scale.lastDegree)
              .reduce((intervals, degree, index) => {
                if (index === 0) return [];
                intervals.push(`step-${degree - this.state.scale.intervals[index - 1]}`);
                return intervals;
              }, [])
              .map((step, index) => (
                <Badge key={index} color="warning" style={styles.badge}>
                  {label(step)}
                </Badge>
              ))
            }
          </p>

          <p className="lead">
            {'Formula: '}
            {this.state.scale.intervals
              .map((degree, index) => (
                <Badge color="danger" key={index} style={styles.badge}>
                  {label(`degree-${degree}`)}
                </Badge>
              ))
            }
          </p>

          <p className="lead">
            Modes:
          </p>

          <Row>
            <Col lg={styles.lg} md={styles.md}>
              <div style={styles.buttonGroup}>
                {this.renderModeNames()}
              </div>
            </Col>
          </Row>
        </ReactCSSTransitionGroup>

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
  lg: {
    size  : 6,
    offset: 3
  },
  md: {
    size  : 8,
    offset: 2
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
