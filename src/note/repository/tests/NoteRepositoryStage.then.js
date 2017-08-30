// @flow

import {forEach} from 'lodash'
import {
  State,
  Stage,
} from 'js-given'

import Note from '../../model/Note'
import type {NoteName, NoteAlt} from '../../model/Note'
import NoteRepository from '../NoteRepository'

class NoteRepositoryThenStage extends Stage {
  @State id: string;
  @State slug: string;
  @State repository: NoteRepository;

  @State note: ?Note;
  @State next: ?Note;
  @State twin: ?Note;
  @State position: ?number;

  should_have_valid_mapping(): this {
    const {notes} = this.repository

    expect(Object.keys(notes)).toHaveLength(21)

    forEach([
      'A♭', 'A', 'A♯',
      'B♭', 'B', 'B♯',
      'C♭', 'C', 'C♯',
      'D♭', 'D', 'D♯',
      'E♭', 'E', 'E♯',
      'F♭', 'F', 'F♯',
      'G♭', 'G', 'G♯',
    ], id => {
      expect(notes).toHaveProperty(id)
      expect(notes[id]).toBeInstanceOf(Note)
    })

    return this
  }

  should_have_id_$(expectedNoteId: ?string): this {
    if (expectedNoteId === null || expectedNoteId === undefined) {
      expect(this.note).toBeNull()
      return this
    }

    else if (expectedNoteId !== null && expectedNoteId !== undefined) {
      expect(this.note).not.toBeNull()

      if (this.note) {
        expect(this.note.id).toEqual(expectedNoteId)
      }
    }

    return this
  }

  should_have_next_id_$(expectedNextNoteId: ?string): this {
    if (expectedNextNoteId === null || expectedNextNoteId === undefined) {
      expect(this.next).toBeNull()
    }

    else if (expectedNextNoteId !== null && expectedNextNoteId !== undefined) {
      const expectedNextNote = this.repository.getById(expectedNextNoteId)

      expect(this.note).not.toBeNull()
      expect(this.next).not.toBeNull()
      expect(expectedNextNote).not.toBeNull()

      if (this.next && expectedNextNote) {
        const position =
          this.repository.getPosition(this.next)
        const expectedPosition =
          this.repository.getPosition(expectedNextNote)

        expect(position).toEqual(expectedPosition)
      }
    }

    return this
  }

  should_have_twin_id_$(expectedTwinNoteId: ?string): this {
    if (expectedTwinNoteId === null || expectedTwinNoteId === undefined) {
      expect(this.twin).toBeNull()
    }

    else if (expectedTwinNoteId !== null && expectedTwinNoteId !== undefined) {
      expect(this.note).not.toBeNull()
      expect(this.twin).not.toBeNull()

      if (this.twin) {
        expect(this.twin.id).toEqual(expectedTwinNoteId)
      }
    }

    return this
  }

  should_have_position_$(expectedPosition: ?number): this {
    if (expectedPosition === null || expectedPosition === undefined) {
      expect(this.note).toBeNull()
    }

    else {
      expect(this.position).toEqual(expectedPosition)
    }

    return this
  }

  should_have_slug_$(expectedSlug: string): this {
    expect(this.slug).toEqual(expectedSlug)
    return this
  }
}

export default NoteRepositoryThenStage
