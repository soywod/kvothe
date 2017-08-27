// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Button, ListGroupItem } from 'reactstrap'

import label from '../../utils/label'

type Props = {
  id: string;
  active: boolean;
  onSelectFormula: (formulaId: string) => void;
}

function FormulaNameSelection(props: Props) {
  const {
    id,
    active,
    onSelectFormula,
  } = props

  const selectFormula = onSelectFormula.bind(null, id)

  return (
    <ListGroupItem
      action
      active={active}
      style={styles.action}
      onClick={selectFormula}>
      {label(id)}
    </ListGroupItem>
  )
}

FormulaNameSelection.propTypes = {
  id: PropTypes.string.isRequired,
  active: PropTypes.bool,

  onSelectFormula: PropTypes.func.isRequired,
};

const styles = {
  action: {
    cursor: 'pointer',
  },
}

export default FormulaNameSelection
