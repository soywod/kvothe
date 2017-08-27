// @flow

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import {Button, Col, Row} from 'reactstrap'

import type {NoteName, NoteAlt} from '../model/Note'

import label from '../../utils/label'
import Note from '../model/Note'
import NoteRepository from '../repository/NoteRepository'
import NoteNameSelection from './NoteNameSelection'
import NoteAltSelection from './NoteAltSelection'

type Props = {
  previous: () => string;
  next: (noteId: ?string) => string;
}

type State = {
  note: ?Note,
}

const noteRepository = new NoteRepository

class NoteSelection extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      note: null,
    }
  }

  selectNoteName = (noteName: NoteName) => {
    const {note} = this.state
    const newNoteName = noteName
    const newNoteAlt = note ? note.alt : null
    const newNote = noteRepository.getByNameAndAlt(newNoteName, newNoteAlt)

    this.setState({note: newNote})
  }

  selectNoteAlt = (noteAlt: NoteAlt) => {
    const {note} = this.state
    const newNoteName = note ? note.name : 'C'
    const newNoteAlt = note && note.alt !== noteAlt
      ? noteAlt
      : null

    const newNote = noteRepository.getByNameAndAlt(newNoteName, newNoteAlt)

    this.setState({note: newNote})
  }

  renderNoteNames() {
    const {note} = this.state

    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((name, key) => {
      const alt = note ? note.alt : null
      const active = note
        ? name === note.name
        : false

      return (
        <NoteNameSelection
          key={key}
          name={name}
          alt={alt}
          active={active}
          selectNoteName={this.selectNoteName}
        />
      )
    })
  }

  renderNoteAlts() {
    const {note} = this.state

    return ['♭', '♯'].map((alt, key) => {
      const active = note
        ? alt === note.alt
        : false

      return (
        <NoteAltSelection
          key={key}
          alt={alt}
          active={active}
          disabled={!note}
          selectNoteAlt={this.selectNoteAlt}
        />
      )
    })
  }

  render() {
    const {previous, next} = this.props
    const {note} = this.state
    const slug = note
      ? noteRepository.getSlugById(note.id)
      : null

    return (
      <div className="animated-container">
        <p className="lead">
          Pick a note :
        </p>

        <div className="navigation">
          <Button tag={Link} to={previous()}>
            <i className="fa fa-arrow-left icon-left" />
            Back
          </Button>

          <Button
            tag={Link}
            to={next(slug)}
            color="primary"
            className="float-right"
            disabled={!note || !note.name}>
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
