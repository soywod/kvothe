// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory, Link} from 'react-router';
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBlock,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

import {SCALES, MODES} from './Scale.const';
import ScaleFormulaSelection from './ScaleFormulaSelection';

type Props = {
  previous: () => string;
  next: (formula: number) => string;
};

type State = {
  formula: number;
};

class ScaleSelection extends React.Component {
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      formula: 0,
    };

    this.onSelectScale = this.onSelectScale.bind(this);
  }

  onSelectScale = (formula: number) => {
    this.setState({formula});
  }

  renderModes() {
    return MODES
      .map((formula: number, index: number) => (
        <ScaleFormulaSelection
          key={index}
          formula={formula}
          active={formula === this.state.formula}
          onSelectScale={this.onSelectScale}
        />
      ));
  }

  renderScales() {
    return SCALES
      .map((formula: number, index: number) => (
        <ScaleFormulaSelection
          key={index}
          formula={formula}
          active={formula === this.state.formula}
          onSelectScale={this.onSelectScale}
        />
      ));
  }

  render() {
    return (
      <div className="animated-container">
        <p className="lead">
          Pick a scale or a mode :
        </p>

        <div className="navigation">
          <Button
            tag={Link}
            to={this.props.previous()}>
            <i className="fa fa-arrow-left icon-left"/>
            Back
          </Button>

          <Button
            tag={Link}
            to={this.props.next(this.state.formula)}
            color="primary"
            className="float-right"
            disabled={this.state.formula === 0}>
            Next
            <i className="fa fa-arrow-right icon-right"/>
          </Button>
        </div>

        <Row>
          <Col md="6" xs="12">
            <div style={styles.buttonGroup}>
              <Card>
                <ListGroup flush>
                  <ListGroupItem color="info" className="text-center">
                    <h5>Scales</h5>
                  </ListGroupItem>
                  {this.renderScales()}
                </ListGroup>
              </Card>
            </div>
          </Col>
          <Col md="6" xs="12">
            <div style={styles.buttonGroup}>
              <Card>
                <ListGroup flush>
                  <ListGroupItem color="warning" className="text-center">
                    <h5>Modes</h5>
                  </ListGroupItem>
                  {this.renderModes()}
                </ListGroup>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

ScaleSelection.propTypes = {
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

const styles = {
  buttonGroup: {
    width       : '100%',
    textAlign   : 'left',
    marginBottom: 30
  }
};

export default ScaleSelection;

