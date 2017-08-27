// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Button, ListGroupItem } from 'reactstrap'

import label from '../../utils/label'

type Props = {
  name: string;
  active: boolean;
  onSelectFormula: (formulaName: string) => void;
}

function FormulaNameSelection(props: Props) {
  const {
    name,
    active,
    onSelectFormula,
  } = props

  const selectFormula = onSelectFormula.bind(null, name)

  return (
    <ListGroupItem
      action
      active={active}
      style={styles.action}
      onClick={selectFormula}>
      {label(name)}
    </ListGroupItem>
  )
}

FormulaNameSelection.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,

  onSelectFormula: PropTypes.func.isRequired,
};

const styles = {
  action: {
    cursor: 'pointer',
  },
}

export default FormulaNameSelection
