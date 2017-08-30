// @flow

import {
  State,
  Stage,
} from 'js-given'

import Note from '../../model/Note'
import type {NoteName, NoteAlt} from '../../model/Note'
import NoteRepository from '../NoteRepository'

class NoteRepositoryGivenStage extends Stage {
  @State id: string;
  @State name: NoteName;
  @State alt: ?NoteAlt;
  @State slug: string;
  @State repository: NoteRepository;

  a_note_repository(repository: NoteRepository): this {
    this.repository = repository
    return this
  }

  a_note_id_$(id: string): this {
    this.id = id
    return this
  }

  a_note_name_$(name: NoteName): this {
    this.name = name
    return this
  }

  a_note_alt_$(alt: ?NoteAlt): this {
    this.alt = alt
    return this
  }

  a_note_slug_$(slug: string): this {
    this.slug = slug
    return this
  }
}

export default NoteRepositoryGivenStage
