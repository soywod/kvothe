import React from 'react';
import * as Bootstrap from 'reactstrap';

import label from '../helpers/label';

const ModeSelectionItem = props => (
  <Bootstrap.Button
    size="sm"
    active={props.active}
    onClick={props.selectMode.bind(undefined, props.name)}
    style={styles.button}>
    <div>
      {label(props.name)}
    </div>
  </Bootstrap.Button>
);

ModeSelectionItem.propTypes = {
  name  : React.PropTypes.string.isRequired,
  active: React.PropTypes.bool,

  selectMode: React.PropTypes.func.isRequired
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

export default ModeSelectionItem;
