import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as Bootstrap from 'reactstrap';

import * as Scales from '../const/ScaleName'
import ScaleName from './ScaleName';

class ScaleSelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteName: props.params.noteName,
      noteAlt : props.params.noteAlt
    };

    this.selectScaleName = this.selectScaleName.bind(this);
  }

  selectScaleName(scaleName) {
    this.setState({scaleName});
  }

  renderScaleNames() {
    return Object.values(Scales).map(scaleName => (
      <ScaleName
        key={scaleName}
        name={scaleName}
        active={scaleName === this.state.scaleName}
        selectScaleName={this.selectScaleName}/>
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
            Pick a scale :
          </p>

          <Bootstrap.Row>
            <Bootstrap.Col lg={styles.lg} md={styles.md}>
              <div style={styles.buttonGroup}>
                {this.renderScaleNames()}
              </div>
            </Bootstrap.Col>
          </Bootstrap.Row>
        </ReactCSSTransitionGroup>

        <div>
          <Bootstrap.Button
            tag={Link}
            to="/harmonizer"
            color="link">
              <i className="fa fa-arrow-left icon-left"/>
              Back
          </Bootstrap.Button>

          <Bootstrap.Button
            tag={Link}
            to={`/harmonizer/${this.state.noteName}/${this.state.noteAlt}/${this.state.scaleName}`}
            color="primary"
            className="float-right"
            disabled={!this.state.scaleName}>
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
    width    : '100%',
    textAlign: 'left',
    marginBottom: 30
  }
};

export default ScaleSelection;
