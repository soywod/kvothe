// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';

import label from '../../helpers/label';

class NoteNameSelection extends React.Component {
  render() {
    return (
      <Button
        size="sm"
        active={this.props.active}
        onClick={this.props.selectNoteName.bind(null, this.props.name)}
        style={styles.button}>
        {label(this.props.name)}
        <sub>{label(this.props.alt)}</sub>
      </Button>
    );
  }
}

NoteNameSelection.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  active: PropTypes.bool,

  selectNoteName: PropTypes.func.isRequired
};

const styles = {
  button: {
    boxSizing: 'border-box',
    flex     : 1,
    height   : 60,
    margin   : '0 2px'
  }
};

export default NoteNameSelection;

