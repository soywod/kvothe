// @flow

import {
  State,
  Stage,
} from 'js-given'

import Note from '../../model/Note'
import type {NoteName, NoteAlt} from '../../model/Note'
import NoteRepository from '../NoteRepository'

class NoteRepositoryWhenStage extends Stage {
  @State id: string;
  @State name: NoteName;
  @State alt: ?NoteAlt;
  @State slug: string;
  @State repository: NoteRepository;

  @State note: ?Note;
  @State next: ?Note;
  @State twin: ?Note;
  @State position: ?number;

  get_note_by_id(): this {
    this.note = this.repository.getById(this.id)
    return this
  }

  get_note_by_name_and_alt(): this {
    this.note = this.name
      ? this.repository.getByNameAndAlt(this.name, this.alt)
      : null

    return this
  }

  get_next_note(): this {
    this.next = this.note
      ? this.repository.getNext(this.note)
      : null

    return this
  }

  get_twin_note(): this {
    this.twin = this.note
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

  get_slug_by_id(): this {
    this.slug = this.repository.getSlugById(this.id)
    return this
  }

  get_note_by_slug(): this {
    this.note = this.repository.getBySlug(this.slug)
    return this
  }
}

export default NoteRepositoryWhenStage
