// @flow

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {browserHistory, Link} from 'react-router'
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBlock,
  ListGroup,
  ListGroupItem
} from 'reactstrap'

import type {FormulaCategory} from '../../formula/model/Formula'

import Formula from '../model/Formula'
import FormulaRepository from '../repository/FormulaRepository'
import FormulaNameSelection from './FormulaNameSelection'

type Props = {
  previous: () => string;
  next: (formulaSlug: ?string) => string;
}

type State = {
  formula: ?Formula;
}

const formulaRepository = new FormulaRepository

class ScaleSelection extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      formula: null,
    }
  }

  onSelectFormula = (formulaId: string) => {
    const newFormula = formulaRepository.getById(formulaId)
    this.setState({formula: newFormula})
  }

  renderFormulasByCategory(category: FormulaCategory) {
    const {formula: activeFormula} = this.state
    const formulas = formulaRepository.getByCategory(category)

    return formulas.map(({id}, key) => {
      const active = activeFormula
        ? id === activeFormula.id
        : false

      return (
        <FormulaNameSelection
          key={key}
          id={id}
          active={active}
          onSelectFormula={this.onSelectFormula}
        />
      )
    })
  }

  render() {
    const {previous, next} = this.props
    const {formula} = this.state

    return (
      <div className="animated-container">
        <p className="lead mb-4">
          Pick a scale or a mode :
        </p>

        <div className="mb-4">
          <Button
            tag={Link}
            to={previous()}>
            <i className="fa fa-arrow-left mr-2"/>
            Back
          </Button>

          <Button
            tag={Link}
            to={next(formula
              ? formulaRepository.getSlugById(formula.id)
              : null)
            }
            color="primary"
            className="float-right"
            disabled={!formula}>
            Next
            <i className="fa fa-arrow-right ml-2"/>
          </Button>
        </div>

        <Row>
          <Col md="6" xs="12">
            <div style={styles.buttonGroup}>
              <Card>
                <ListGroup flush>
                  <ListGroupItem color="info" className="text-center">
                    <h5>Scales</h5>
                  </ListGroupItem>
                  {this.renderFormulasByCategory('scale')}
                </ListGroup>
              </Card>
            </div>
          </Col>
          <Col md="6" xs="12">
            <div style={styles.buttonGroup}>
              <Card>
                <ListGroup flush>
                  <ListGroupItem color="warning" className="text-center">
                    <h5>Modes</h5>
                  </ListGroupItem>
                  {this.renderFormulasByCategory('mode')}
                </ListGroup>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

ScaleSelection.propTypes = {
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
}

const styles = {
  buttonGroup: {
    width: '100%',
    textAlign: 'left',
    marginBottom: 30,
  },
}

export default ScaleSelection
