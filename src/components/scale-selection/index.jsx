import React from 'react';
import { browserHistory, Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as Bootstrap from 'reactstrap';

import * as Scales from '../../const/Scale'
import Scale from './Scale';

class ScaleSelection extends React.Component {
  constructor(props) {
    super(props);

    this.onSelectScale = this.onSelectScale.bind(this);
  }

  onSelectScale(scale) {
    browserHistory.push(`/harmonizer/${this.props.params.noteName}/${this.props.params.noteAlt}/${scale}`);
  }

  renderScaleNames() {
    return Object.values(Scales)
      .sort((a, b) => a > b)
      .map((scale, index) => (
        <Scale key={index} name={scale} onSelectScale={this.onSelectScale}/>
      ));
  }

  render() {
    return (
      <div>
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

        <div>
          <Bootstrap.Button
            tag={Link}
            to="/harmonizer"
            color="link">
            <i className="fa fa-arrow-left icon-left"/>
            Back
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

export default ScaleSelection;
