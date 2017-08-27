// @flow

import {
  State,
  Stage,
} from 'js-given'

import Note from '../../model/Note'
import type {NoteName, NoteAlt} from '../../model/Note'
import NoteRepository from '../NoteRepository'

class NoteRepositoryWhenStage extends Stage {
  @State noteId: string;
  @State noteName: ?NoteName;
  @State noteAlt: ?NoteAlt;
  @State repository: NoteRepository;

  @State note: ?Note;
  @State nextNote: ?Note;
  @State twinNote: ?Note;
  @State position: ?number;
  @State slug: string;

  get_note_by_id(): this {
    this.note = this.repository.getById(this.noteId)
    return this
  }

  get_note_by_name_and_alt(): this {
    this.note = this.noteName
      ? this.repository.getByNameAndAlt(this.noteName, this.noteAlt)
      : null

    return this
  }

  get_next_note(): this {
    this.nextNote = this.note
      ? this.repository.getNext(this.note)
      : null

    return this
  }

  get_twin_note(): this {
    this.twinNote = this.note
      ? this.repository.getTwin(this.note)
      : null

    return this
  }

  get_note_position(): this {
    this.position = this.note
      ? this.repository.getPosition(this.note)
      : null

    return this
  }

  get_note_slug(): this {
    this.slug = this.repository.getSlugById(this.noteId)
    return this
  }
}

export default NoteRepositoryWhenStage
