// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';

import label from '../helpers/label';

class NoteAltSelection extends React.Component {
  render() {
    return (
      <Button
        size="sm"
        active={this.props.active}
        disabled={this.props.disabled}
        onClick={this.props.selectNoteAlt.bind(null, this.props.alt)}
        style={styles.button}>
        {label(this.props.alt)}
      </Button>
    );
  }
}

NoteAltSelection.propTypes = {
  alt: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,

  selectNoteAlt: PropTypes.func.isRequired
};

const styles = {
  button: {
    boxSizing: 'border-box',
    flex     : 1,
    height   : 60,
    margin   : '0 2px'
  }
};

export default NoteAltSelection;

