import React from 'react';
import * as Bootstrap from 'reactstrap';

import label from '../helpers/label';

const NoteName = props => (
  <Bootstrap.Button
    size="sm"
    active={props.active}
    onClick={props.selectNoteName.bind(undefined, props.name)}
    style={styles.button}>
    {label(props.name)}
    <sub>{label(props.alt)}</sub>
	</Bootstrap.Button>
);

NoteName.propTypes = {
  name  : React.PropTypes.string.isRequired,
  active: React.PropTypes.bool,

  selectNoteName: React.PropTypes.func.isRequired
};

const styles = {
  button: {
    boxSizing: 'border-box',
    flex     : 1,
    height   : 45,
    margin   : '0 2px'
  }
};

export default NoteName;
