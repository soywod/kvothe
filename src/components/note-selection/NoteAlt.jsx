// @flow

import React from 'react';
import * as Bootstrap from 'reactstrap';

import label from '../../helpers/label';

class NoteAltComponent extends React.Component {
  render() {
    return (
      <Bootstrap.Button
        size="sm"
        active={this.props.active}
        onClick={this.props.selectNoteAlt.bind(undefined, this.props.name)}
        style={styles.button}>
        {label(this.props.name)}
      </Bootstrap.Button>
    );
  }
}

NoteAltComponent.propTypes = {
  name  : React.PropTypes.string.isRequired,
  active: React.PropTypes.bool,

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

