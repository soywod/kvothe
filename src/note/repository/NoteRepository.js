// @flow

import {assign, forEach, findKey} from 'lodash'

import Note from '../model/Note'
import type {NoteName, NoteAlt} from '../model/Note'

type NoteMap = {
  [id: string]: Note;
}

const NB_POSITIONS: number = 12

class NoteRepository {
  static instance: NoteRepository;
  notes: NoteMap;

  constructor() {
    if(NoteRepository.instance instanceof NoteRepository) {
      return NoteRepository.instance
    }

    const notes = {}

    forEach(['A', 'B', 'C', 'D', 'E', 'F', 'G'], (name: NoteName) => {
      forEach(['♭', '♯', null], (alt: ?NoteAlt) => {
        const params = {name, alt}
        const note = new Note(params)

        notes[note.id] = note
      })
    })

    this.notes = assign(this.notes, notes)
    NoteRepository.instance = this
  }

  getById(id: string): ?Note {
    return this.notes[id] || null
  }

  getByNameAndAlt(name: NoteName, alt: ?NoteAlt): ?Note {
    const id = findKey(this.notes, (note: Note) => (
      note.name === name && note.alt === alt
    ))

    if (! id) {
      return null
    }

    return this.notes[id]
  }

  getNext(note: Note, offset: number = 1): Note {
    const position = this.getPosition(note)
    const nextPosition = (position + offset) % NB_POSITIONS
    const id = findKey(this.notes, (currNote: Note) => (
      this.getPosition(currNote) === nextPosition
    ))
    
    if (! id) {
      throw new Error('Next note not found')
    }

    return this.notes[id]
  }

  getTwin(note: Note): ?Note {
    const position = this.getPosition(note)
    const id = findKey(this.notes, (currNote: Note) => (
      currNote.id !== note.id && this.getPosition(currNote) === position
    ))

    if (! id) {
      return null
    }

    return this.notes[id]
  }

  getPosition(note: Note): ?number {
    switch(note.id) {
      case 'A♭': return 0
      case 'G♯': return 0
      case 'A': return 1
      case 'A♯': return 2
      case 'B♭': return 2
      case 'B': return 3
      case 'C♭': return 3
      case 'B♯': return 4
      case 'C': return 4
      case 'C♯': return 5
      case 'D♭': return 5
      case 'D': return 6
      case 'D♯': return 7
      case 'E♭': return 7
      case 'E': return 8
      case 'F♭': return 8
      case 'E♯': return 9
      case 'F': return 9
      case 'F♯': return 10
      case 'G♭': return 10
      case 'G': return 11

      default: return null
    }
  }
}

export {NB_POSITIONS}
export default NoteRepository
