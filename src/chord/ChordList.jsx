// @flow

import React, { Component } from 'react'

import Scale from '../scale/Scale.class'
import Chord from './Chord'
import noteRepository from '../note/repository/NoteRepository'
import scaleRepository from '../scale/Scale.repository'
import label from '../helpers/label'

type Props = {
  noteId: string;
  formula: number;
  previous: () => string;
}

type State = {
  scale: Scale;
  modes: Array<Scale | null>;
}

class ScaleList extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const { formula, noteId } = props

    const note = noteRepository.getById(noteId)
    if (!note) {
      throw new Error(`Error while getting note from note id '${noteId}'`)
    }

    const scale = scaleRepository.getScaleByFormula(note, formula)
    if (!scale) {
      throw new Error(`Error while getting scale from formula '${formula}'`)
    }

    const modes = scaleRepository.getModesFromScale(scale)
    if (!modes) {
      throw new Error(`Error while getting modes from scale`)
    }

    this.state = {
      scale,
      modes,
    }
  }

  render() {
    /*
    2 - sus: C(sus2)
    3 - Minor: Cm
    4 - sus: C(sus4)
    5 - Dim: C(dim)
      - Aug: C(aug)
    */
    const {scale} = this.state
    const noteName = label(scale.tone.name)
    const noteAlt = label(scale.tone.alt)
    const third = scale.intervals[3] ? 'm' : ''
    console.log(scale.intervals)

    return <div>{`${noteName}${noteAlt}${third}`}</div>
  }
}

export default ScaleList
