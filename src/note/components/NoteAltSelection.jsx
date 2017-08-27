// @flow

import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'reactstrap'

import type {NoteAlt} from '../model/Note'
import label from '../../utils/label'

type Props = {
  alt: NoteAlt;
  active: boolean;
  disabled: boolean;
  selectNoteAlt: NoteAlt => void;
}

function NoteAltSelection(props: Props) {
  const {
    alt,
    active,
    disabled,
    selectNoteAlt,
  } = props

  return (
    <Button
      size="sm"
      active={active}
      disabled={disabled}
      onClick={selectNoteAlt.bind(null, alt)}
      style={styles.button}>
      {label(alt)}
    </Button>
  );
}

NoteAltSelection.propTypes = {
  alt: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,

  selectNoteAlt: PropTypes.func.isRequired,
}

const styles = {
  button: {
    boxSizing: 'border-box',
    flex: 1,
    height: 60,
    margin: '0 2px',
  }
}

export default NoteAltSelection
