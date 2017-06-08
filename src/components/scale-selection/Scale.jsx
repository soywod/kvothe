// @flow

import React from 'react';
import {Link} from 'react-router';
import {Button, ListGroupItem} from 'reactstrap';

import label from '../../helpers/label';

class ScaleComponent extends React.Component {
  render() {
    return (
      <ListGroupItem action style={styles.action} onClick={this.props.onSelectScale.bind(undefined, this.props.name)}>
        {label(this.props.name)}
      </ListGroupItem>
    );
  }
}

ScaleComponent.propTypes = {
  name: React.PropTypes.string.isRequired,

  onSelectScale: React.PropTypes.func.isRequired
};

const styles = {
  action: {
    cursor: 'pointer'
  }
};

export default ScaleComponent;

