import React from 'react';
import { Link } from 'react-router';
import { Button, ListGroupItem } from 'reactstrap';

import label from '../../helpers/label';

const Scale = props => (
  <ListGroupItem action style={styles.action} onClick={props.onSelectScale.bind(undefined, props.name)}>
    {label(props.name)}
  </ListGroupItem>
);

Scale.propTypes = {
  name: React.PropTypes.string.isRequired,

  onSelectScale: React.PropTypes.func.isRequired
};

const styles = {
  action: {
    cursor: 'pointer'
  }
};

export default Scale;
