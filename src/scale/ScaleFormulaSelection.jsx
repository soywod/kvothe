// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Button, ListGroupItem} from 'reactstrap';

import label from '../helpers/label';

class ScaleFormulaSelection extends React.Component {
  onSelectScale = () => (
    this.props.onSelectScale.bind(null, this.props.formula)
  );

  render() {
    return (
      <ListGroupItem action active={this.props.active} style={styles.action} onClick={this.onSelectScale()}>
        {label(this.props.formula)}
      </ListGroupItem>
    );
  }
}

ScaleFormulaSelection.propTypes = {
  formula: PropTypes.number.isRequired,
  active: PropTypes.boolean,

  onSelectScale: PropTypes.func.isRequired,
};

const styles = {
  action: {
    cursor: 'pointer'
  }
};

export default ScaleFormulaSelection;

