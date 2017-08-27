// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Button, ListGroupItem } from 'reactstrap'

import label from '../helpers/label'

type Props = {
  formula: number;
  active: boolean;
  onSelectScale: (formula: number) => void;
}

function ScaleFormulaSelection(props: Props) {
  const {
    formula,
    active,
    onSelectScale,
  } = props

  const selectScale = onSelectScale.bind(null, formula)

  return (
    <ListGroupItem
      action
      active={active}
      style={styles.action}
      onClick={selectScale}>
      {label(formula)}
    </ListGroupItem>
  )
}

ScaleFormulaSelection.propTypes = {
  formula: PropTypes.number.isRequired,
  active: PropTypes.bool,

  onSelectScale: PropTypes.func.isRequired,
};

const styles = {
  action: {
    cursor: 'pointer',
  },
}

export default ScaleFormulaSelection
