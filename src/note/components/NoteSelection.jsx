// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Button, Col, Row } from 'reactstrap'

import label from '../../helpers/label'
import Note from '../Note'
import noteRepository from './../repository/NoteRepository'
import type { NoteName, NoteAlt } from '../Note.type'

import NoteNameSelection from './NoteNameSelection'
import NoteAltSelection from './NoteAltSelection'

type Props = {
  previous: () => string;
  next: (noteId: ?string) => string;
}

type State = {
  note: ?Note,
}

class NoteSelection extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      note: null,
    }

    this.selectNoteName = this.selectNoteName.bind(this)
    this.selectNoteAlt = this.selectNoteAlt.bind(this)
  }

  selectNoteName = (noteName: NoteName) => {
    const newNoteAlt = this.state.note ? this.state.note.alt : 'natural'
    const note = noteRepository.getByNameAndAlt(noteName, newNoteAlt)

    this.setState({ note })
  }

  selectNoteAlt = (noteAlt: NoteAlt) => {
    const newNoteName = this.state.note ? this.state.note.name : 'c'
    const newNoteAlt = this.state.note && this.state.note.alt !== noteAlt
      ? noteAlt
      : 'natural'

    const note = noteRepository.getByNameAndAlt(newNoteName, newNoteAlt)

    this.setState({ note })
  }

  renderNoteNames() {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g'].map(noteName => {
      const { note } = this.state

      const alt = note ? note.alt : 'natural'
      const active = (note && noteName === note.name)
        ? true
        : false

      return (
        <NoteNameSelection
          key={noteName}
          name={noteName}
          alt={alt}
          active={active}
          selectNoteName={this.selectNoteName}
        />
      )
    })
  }

  renderNoteAlts() {
    return ['flat', 'sharp'].map(noteAlt => {
      const { note } = this.state

      const active = (note && noteAlt === note.alt)
        ? true
        : false

      return (
        <NoteAltSelection
          key={noteAlt}
          alt={noteAlt}
          active={active}
          disabled={!note}
          selectNoteAlt={this.selectNoteAlt}
        />
      )
    })
  }

  render() {
    return (
      <div className="animated-container">
        <p className="lead">
          Pick a note :
        </p>

        <div className="navigation">
          <Button tag={Link} to={this.props.previous()}>
            <i className="fa fa-arrow-left icon-left" />
            Back
          </Button>

          <Button
            tag={Link}
            to={this.props.next(this.state.note ? this.state.note.id : null)}
            color="primary"
            className="float-right"
            disabled={!this.state.note || !this.state.note.name}>
            Next
            <i className="fa fa-arrow-right icon-right" />
          </Button>
        </div>

        <Row>
          <Col lg={styles.lg} md={styles.md}>
            <div style={{ ...styles.buttonGroup, ...styles.firstButtonGroup }}>
              {this.renderNoteNames()}
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={styles.lg} md={styles.md}>
            <div style={styles.buttonGroup}>
              {this.renderNoteAlts()}
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

NoteSelection.propTypes = {
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
}

const styles = {
  lg: {
    size: 6,
    offset: 3,
  },
  md: {
    size: 8,
    offset: 2,
  },

  firstButtonGroup: {
    marginTop: 14,
    marginBottom: 4,
  },
  buttonGroup: {
    width: '100%',
    display: 'flex',
    marginBottom: 30,
  },
}

export default NoteSelection