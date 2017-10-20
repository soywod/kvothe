// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {browserHistory, Link, Router} from 'react-router'
import {Button, Card, ListGroup, ListGroupItem} from 'reactstrap'

import type {FormulaCategory} from '../../formula/model/Formula'

import Scale from '../model/Scale'
import Formula from '../../formula/model/Formula'
import ScaleView from './ScaleView'
import NoteRepository from '../../note/repository/NoteRepository'
import FormulaRepository from '../../formula/repository/FormulaRepository'
import ScaleRepository from '../repository/ScaleRepository'

type Props = {
  noteSlug: string;
  formulaSlug: string;
  previous: () => string;
}

type State = {
  scale: Scale;
  modes: Array<?Scale>;
}

const noteRepository = new NoteRepository
const formulaRepository = new FormulaRepository
const scaleRepository = new ScaleRepository

class ModesView extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const {formulaSlug, noteSlug} = props

    const note = noteRepository.getBySlug(noteSlug)
    if (! note) {
      throw new TypeError(`Note slug '${noteSlug}' is invalid`)
    }

    const formula = formulaRepository.getBySlug(formulaSlug)
    if (! formula) {
      throw new TypeError(`Formula slug '${formulaSlug}' is invalid`)
    }

    const scale = scaleRepository.getByNoteAndFormula(note, formula)
    const modes = scaleRepository.getModesByScale(scale)

    this.state = {
      scale,
      modes,
    }
  }

  renderModes({scales, title, color, expanded} : {
    scales: Array<?Scale>,
    title: string,
    color: string,
    expanded: boolean,
  }) {
    if (! scales.length) {
      return null
    }

    return (
      <Card className="mb-4">
        <ListGroup flush>
          <ListGroupItem color={color}>
            <h5>{title}</h5>
          </ListGroupItem>

          {scales.map((scale, index) => (scale &&
            <ListGroupItem key={index}>
              <ScaleView
                color={color}
                scale={scale}
                expanded={expanded}
              />
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    )
  }

  render() {
    const scaleFormulaIds = formulaRepository
      .getByCategory("scale")
      .map(f => f.id)

    const famousModes = this.state.modes
      .filter(scale => (
        scale &&
        scale.formula.value !== this.state.scale.formula.value &&
        scaleFormulaIds.includes(scale.formula.id)
      ))

    const otherModes = this.state.modes
      .filter(scale => (
        scale &&
        scale.formula.value !== this.state.scale.formula.value &&
        ! scaleFormulaIds.includes(scale.formula.id)
      ))

    return (
      <div className="animated-container">
        <div className="lead mb-4">
          Harmonization result :
        </div>

        <div className="mb-4">
          <Button
            tag={Link}
            to={this.props.previous()}>
            <i className="fa fa-arrow-left mr-2" />
            Back
          </Button>
        </div>

        {this.renderModes({
          scales: [this.state.scale],
          title: "Current scale",
          color: "info",
          expanded: true,
        })}

        {this.renderModes({
          scales: famousModes,
          title: "Famous modes reference",
          color: "warning",
          expanded: false,
        })}

        {this.renderModes({
          scales: otherModes,
          title: "Other modes reference",
          color: "danger",
          expanded: false,
        })}
      </div>
    )
  }
}

export default ModesView
