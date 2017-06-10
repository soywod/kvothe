// @flow

import React from 'react';
import {Button} from 'reactstrap';

import label from '../helpers/label';

class NoteAltComponent extends React.Component {
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

NoteAltComponent.propTypes = {
  alt: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool,

  selectNoteAlt: React.PropTypes.func.isRequired
};

const styles = {
  button: {
    boxSizing: 'border-box',
    flex     : 1,
    height   : 75,
    margin   : '0 2px'
  }
};

export default NoteAltComponent;

