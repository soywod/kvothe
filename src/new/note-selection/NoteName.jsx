import React from 'react';
import * as Bootstrap from 'reactstrap';

const NoteName = props => (
  <Bootstrap.Button style={styles.button}>
    {props.name}
	</Bootstrap.Button>
);

NoteName.propTypes = {
  name: React.PropTypes.string.isRequired,
};

const styles = {
  button: {
    flex     : 1,
    height   : 45,
    boxSizing: 'border-box'
  }
};

export default NoteName;
