// @flow

import React from 'react';
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
import ScaleComponent from './Scale';

class ScaleSelectionComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.onSelectScale = this.onSelectScale.bind(this);
  }

  onSelectScale = (formula: number) => {
    browserHistory.push(`/harmonizer/${this.props.params.noteId}/${formula}`);
  }

  renderModes() {
    return MODES
      .map((formula: number, index: number) => (
        <ScaleComponent
          key={index}
          formula={formula}
          onSelectScale={this.onSelectScale}
        />
      ));
  }

  renderScales() {
    return SCALES
      .map((formula: number, index: number) => (
        <ScaleComponent
          key={index}
          formula={formula}
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
            to="/harmonizer">
            <i className="fa fa-arrow-left icon-left"/>
            Back
          </Button>

          <Button
            color="primary"
            className="float-right"
            disabled>
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

const styles = {
  buttonGroup: {
    width       : '100%',
    textAlign   : 'left',
    marginBottom: 30
  }
};

export default ScaleSelectionComponent;

