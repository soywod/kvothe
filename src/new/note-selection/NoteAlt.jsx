import React from 'react';
import * as Bootstrap from 'reactstrap';

const NoteAlt = props => (
  <Bootstrap.Button style={styles.button}>
    {props.name}
	</Bootstrap.Button>
);

NoteAlt.propTypes = {
  name: React.PropTypes.string.isRequired,
};

const styles = {
  button: {
    flex     : 1,
    height   : 50,
    boxSizing: 'border-box'
  }
};

export default NoteAlt;
