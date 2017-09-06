// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { browserHistory, Link, Router } from 'react-router'
import { Button, Card, ListGroup, ListGroupItem } from 'reactstrap'

import Scale from '../model/Scale';
import ScaleListItem from './ScaleListItem'
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

const scaleRepository = new ScaleRepository

class ScaleList extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const { formulaSlug, noteSlug } = props
    const scale = scaleRepository.getByNoteAndFormulaSlug(formulaSlug, noteSlug)
    const modes = scaleRepository.getModesByScale(scale)

    this.state = {
      scale,
      modes,
    }
  }

  // renderMainReferences() {
  //   return this.state.modes
  //     .filter(mode => mode && SCALES.includes(mode.formula))
  //     .map((mode, index) => {
  //       if (!mode || mode.formula === this.state.scale.formula) {
  //         return null
  //       }

  //       return (
  //         <ListGroupItem key={index}>
  //           <ScaleListItem color="warning" mode={mode} />
  //         </ListGroupItem>
  //       )
  //     })
  //     .filter(mode => !!mode)
  // }

  // renderOtherReferences() {
  //   return this.state.modes
  //     .filter(mode => mode && !SCALES.includes(mode.formula))
  //     .map((mode, index) => {
  //       if (!mode || mode.formula === this.state.scale.formula) {
  //         return null
  //       }

  //       return (
  //         <ListGroupItem key={index}>
  //           <ScaleListItem color="danger" mode={mode} />
  //         </ListGroupItem>
  //       )
  //     })
  //     .filter(mode => !!mode)
  // }

  render() {
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
              <ScaleListItem
                color="primary"
                mode={this.state.scale}
                expanded />
            </ListGroupItem>
          </ListGroup>
        </Card>

        <br />

        <Card style={styles.mode}>
          <ListGroup flush>
            <ListGroupItem color="warning">
              <h5>Famous modes reference</h5>
            </ListGroupItem>
          </ListGroup>
        </Card>

        <br />

        <Card style={styles.mode}>
          <ListGroup flush>
            <ListGroupItem color="danger">
              <h5>Other modes reference</h5>
            </ListGroupItem>
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

export default ScaleList
