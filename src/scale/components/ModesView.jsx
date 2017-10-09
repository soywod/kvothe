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

  renderReferences(category: FormulaCategory, color: string) {
    const formulaIds = formulaRepository
      .getByCategory(category)
      .map(f => f.id)

    return this.state.modes
      .filter(scale => scale && formulaIds.includes(scale.formula.id))
      .map((scale, index) => {
        if (!scale || scale.formula === this.state.scale.formula) {
          return null
        }

        return (
          <ListGroupItem key={index}>
            <ScaleView
              color={color}
              scale={scale}
            />
          </ListGroupItem>
        )
      })
      .filter(mode => !!mode)
  }

  render() {
    const {scale} = this.state

    return (
      <div className="animated-container">
        <div className="lead">
          Harmonization result :
        </div>
        <div className="navigation">
          <Button
            tag={Link}
            to={this.props.previous()}>
            <i className="fa fa-arrow-left icon-left" />
            Back
          </Button>
        </div>

        <Card style={styles.mode}>
          <ListGroup flush>
            <ListGroupItem color="info">
              <h5>Current scale</h5>
            </ListGroupItem>

            <ListGroupItem>
              <ScaleView
                color="primary"
                scale={scale}
                expanded
              />
            </ListGroupItem>
          </ListGroup>
        </Card>

        <br />

        <Card style={styles.mode}>
          <ListGroup flush>
            <ListGroupItem color="warning">
              <h5>Famous modes reference</h5>
            </ListGroupItem>

            {this.renderReferences('scale', 'warning')}
          </ListGroup>
        </Card>

        <br />

        <Card style={styles.mode}>
          <ListGroup flush>
            <ListGroupItem color="danger">
              <h5>Other modes reference</h5>
            </ListGroupItem>

            {this.renderReferences('mode', 'danger')}
          </ListGroup>
        </Card>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
  },
  mode: {
    marginBottom: 20,
  },
  badge: {
    marginRight: 5,
  },
  buttonGroup: {
    width: '100%',
    textAlign: 'left',
    marginBottom: 30,
  },
  modeRef: {
    padding: 0,
  },
  caretModeRef: {
    width: 15,
  },
}

export default ModesView
