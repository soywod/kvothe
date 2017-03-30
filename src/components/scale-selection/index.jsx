import React from 'react';
import { browserHistory, Link } from 'react-router';
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

import { SCALES, MODES } from '../../const/Scale';
import Scale from './Scale';

class ScaleSelection extends React.Component {
  constructor(props) {
    super(props);

    this.onSelectScale = this.onSelectScale.bind(this);
  }

  onSelectScale(scale) {
    browserHistory.push(`/harmonizer/${this.props.params.noteName}/${this.props.params.noteAlt}/${scale}`);
  }

  renderModes() {
    return MODES
      .map((scale, index) => (
        <Scale key={index} name={scale} onSelectScale={this.onSelectScale}/>
      ));
  }

  renderScales() {
    return SCALES
      .map((scale, index) => (
        <Scale key={index} name={scale} onSelectScale={this.onSelectScale}/>
      ));
  }

  render() {
    return (
      <div>
        <p className="lead">
          Pick a scale or a mode :
        </p>

        <Row>
          <Col md="6" xs="12">
            <div style={styles.buttonGroup}>
              <Card>
                <ListGroup flush>
                  <ListGroupItem color="info" className="text-center">
                    <h4>Scales</h4>
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
                    <h4>Modes</h4>
                  </ListGroupItem>
                  {this.renderModes()}
                </ListGroup>
              </Card>
            </div>
          </Col>
        </Row>

        <div>
          <Button
            tag={Link}
            to="/harmonizer"
            color="link">
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

export default ScaleSelection;
