import React from 'react';
import * as Bootstrap from 'reactstrap';

import label from '../../helpers/label';

const NoteAlt = props => (
  <Bootstrap.Button
    size="sm"
    active={props.active}
    onClick={props.selectNoteAlt.bind(undefined, props.name)}
    style={styles.button}>
    {label(props.name)}
  </Bootstrap.Button>
);

NoteAlt.propTypes = {
  name  : React.PropTypes.string.isRequired,
  active: React.PropTypes.bool,

  selectNoteAlt: React.PropTypes.func.isRequired
};

const styles = {
  button: {
    boxSizing: 'border-box',
    flex     : 1,
    height   : 40,
    margin   : '0 2px'
  }
};

export default NoteAlt;
