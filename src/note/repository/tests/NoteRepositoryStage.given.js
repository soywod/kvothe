// @flow

import {
  State,
  Stage,
} from 'js-given'

import Note from '../../model/Note'
import type {NoteName, NoteAlt} from '../../model/Note'
import NoteRepository from '../NoteRepository'

class NoteRepositoryGivenStage extends Stage {
  @State noteId: string;
  @State noteName: ?NoteName;
  @State noteAlt: ?NoteAlt;
  @State repository: NoteRepository;

  a_note_repository(repository: NoteRepository): this {
    this.repository = repository
    return this
  }

  a_note_id_$(noteId: string): this {
    this.noteId = noteId
    return this
  }

  a_note_name_$(noteName: ?NoteName): this {
    this.noteName = noteName
    return this
  }

  a_note_alt_$(noteAlt: ?NoteAlt): this {
    this.noteAlt = noteAlt
    return this
  }
}

export default NoteRepositoryGivenStage
