// @flow

import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'reactstrap'

import type {NoteName, NoteAlt} from '../model/Note'
import label from '../../utils/label'

type Props = {
  name: NoteName;
  alt: ?NoteAlt;
  active: boolean;
  selectNoteName: NoteName => void;
}

function NoteNameSelection(props: Props) {
  const {
    name,
    alt,
    active,
    selectNoteName,
  } = props

  return (
    <Button
      size="sm"
      active={active}
      onClick={selectNoteName.bind(null, name)}
      style={styles.button}>
      {label(name)}
      <sub>{label(alt)}</sub>
    </Button>
  )
}

NoteNameSelection.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string,
  active: PropTypes.bool,

  selectNoteName: PropTypes.func.isRequired,
}

const styles = {
  button: {
    boxSizing: 'border-box',
    flex: 1,
    height: 60,
    margin: '0 2px',
  }
}

export default NoteNameSelection
