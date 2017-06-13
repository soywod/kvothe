// @flow

import React from 'react';
import {Link} from 'react-router';
import {Button, ListGroupItem} from 'reactstrap';

import label from '../helpers/label';

class ScaleFormulaSelection extends React.Component {
  onSelectScale = () => (
    this.props.onSelectScale.bind(null, this.props.formula)
  );

  render() {
    return (
      <ListGroupItem action style={styles.action} onClick={this.onSelectScale()}>
        {label(this.props.formula)}
      </ListGroupItem>
    );
  }
}

ScaleFormulaSelection.propTypes = {
  formula: React.PropTypes.number.isRequired,

  onSelectScale: React.PropTypes.func.isRequired
};

const styles = {
  action: {
    cursor: 'pointer'
  }
};

export default ScaleFormulaSelection;

