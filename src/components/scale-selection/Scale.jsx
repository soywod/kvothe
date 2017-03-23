import React from 'react';
import { Link } from 'react-router';
import { Button } from 'reactstrap';

import label from '../../helpers/label';

const Scale = props => (
  <Button
    size="sm"
    onClick={props.onSelectScale.bind(undefined, props.name)}
    style={styles.button}>
    <div>
      {label(props.name)}
    </div>
  </Button>
);

Scale.propTypes = {
  name: React.PropTypes.string.isRequired,

  onSelectScale: React.PropTypes.func.isRequired
};

const styles = {
  button: {
    width    : '100%',
    height   : 40,
    textAlign: 'left',
    boxSizing: 'border-box',
    padding  : '10px 15px',
    margin   : 2
  }
};

export default Scale;
