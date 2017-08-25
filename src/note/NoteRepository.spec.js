// @flow

declare function describe(suiteMessage: string, suite: () => void): void
declare function it(testMessage: string, test: () => void | Promise<void>): void

import {
  parametrized2,
  parametrized3,
  scenario,
  scenarios,
  setupForRspec,
  Stage,
} from 'js-given'

import Note from './Note'
import type {NoteName, NoteAlt} from './Note'
import NoteRepository, {NB_POSITIONS} from './NoteRepository'

setupForRspec(describe, it)

class NoteStage extends Stage {
  noteRepository: NoteRepository;

  noteId: string;
  noteName: ?NoteName;
  noteAlt: ?NoteAlt;

  note: ?Note;
  nextNote: ?Note;
  twinNote: ?Note;
  position: ?number;

  // ----- Given ----- //

  a_note_repository(): this {
    this.noteRepository = new NoteRepository
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

  // ----- When ----- //

  get_note_by_id(): this {
    this.note = this.noteRepository.getById(this.noteId)
    return this
  }

  get_note_by_name_and_alt(): this {
    this.note = this.noteName
      ? this.noteRepository.getByNameAndAlt(this.noteName, this.noteAlt)
      : null

    return this
  }

  get_next_note(): this {
    this.nextNote = this.note
      ? this.noteRepository.getNext(this.note)
      : null

    return this
  }

  get_twin_note(): this {
    this.twinNote = this.note
      ? this.noteRepository.getTwin(this.note)
      : null

    return this
  }

  get_note_position(): this {
    this.position = this.note
      ? this.noteRepository.getPosition(this.note)
      : null

    return this
  }

  // ----- Then ----- //

  should_have_valid_mapping(): this {
    expect(Object.keys(this.noteRepository.notes)).toHaveLength(21)

    expect(this.noteRepository.notes).toHaveProperty('A♭')
    expect(this.noteRepository.notes).toHaveProperty('A')
    expect(this.noteRepository.notes).toHaveProperty('A♯')
    expect(this.noteRepository.notes).toHaveProperty('A♭')
    expect(this.noteRepository.notes).toHaveProperty('B')
    expect(this.noteRepository.notes).toHaveProperty('B♯')
    expect(this.noteRepository.notes).toHaveProperty('B♭')
    expect(this.noteRepository.notes).toHaveProperty('C')
    expect(this.noteRepository.notes).toHaveProperty('C♯')
    expect(this.noteRepository.notes).toHaveProperty('C♭')
    expect(this.noteRepository.notes).toHaveProperty('D')
    expect(this.noteRepository.notes).toHaveProperty('D♯')
    expect(this.noteRepository.notes).toHaveProperty('D♭')
    expect(this.noteRepository.notes).toHaveProperty('E')
    expect(this.noteRepository.notes).toHaveProperty('E♯')
    expect(this.noteRepository.notes).toHaveProperty('E♭')
    expect(this.noteRepository.notes).toHaveProperty('F')
    expect(this.noteRepository.notes).toHaveProperty('F♯')
    expect(this.noteRepository.notes).toHaveProperty('F♭')
    expect(this.noteRepository.notes).toHaveProperty('G')
    expect(this.noteRepository.notes).toHaveProperty('G♯')

    expect(this.noteRepository.notes['A♭']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['A']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['A♯']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['B♭']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['B']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['B♯']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['C♭']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['C']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['C♯']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['D♭']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['D']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['D♯']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['E♭']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['E']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['E♯']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['F♭']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['F']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['F♯']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['G♭']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['G']).toBeInstanceOf(Note)
    expect(this.noteRepository.notes['G♯']).toBeInstanceOf(Note)

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
      expect(this.nextNote).toBeNull()
    }

    else if (expectedNextNoteId !== null && expectedNextNoteId !== undefined) {
      const expectedNextNote = this.noteRepository.getById(expectedNextNoteId)

      expect(this.note).not.toBeNull()
      expect(this.nextNote).not.toBeNull()
      expect(expectedNextNote).not.toBeNull()

      if (this.nextNote && expectedNextNote) {
        const position =
          this.noteRepository.getPosition(this.nextNote)
        const expectedPosition =
          this.noteRepository.getPosition(expectedNextNote)

        expect(position).toEqual(expectedPosition)
      }
    }

    return this
  }

  should_have_twin_id_$(expectedTwinNoteId: ?string): this {
    if (expectedTwinNoteId === null || expectedTwinNoteId === undefined) {
      expect(this.twinNote).toBeNull()
    }

    else if (expectedTwinNoteId !== null && expectedTwinNoteId !== undefined) {
      expect(this.note).not.toBeNull()
      expect(this.twinNote).not.toBeNull()

      if (this.twinNote) {
        expect(this.twinNote.id).toEqual(expectedTwinNoteId)
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
}

// ----- Scenarios ----- //

scenarios('Note', NoteStage, ({ given, when, then }) => ({
  should_init_notes_mapping: scenario({}, () => {
    given().a_note_repository()
    then().should_have_valid_mapping()
  }),

  should_get_note_by_id: scenario({}, parametrized2([
    ['A♭', 'A♭'],
    ['B', 'B'],
    ['C♯', 'C♯'],
    ['bad', null],
  ], (currentNoteId: string, expectedNoteId: ?string) => {
    given()
      .a_note_repository().and()
      .a_note_id_$(currentNoteId)
    when().get_note_by_id()
    then().should_have_id_$(expectedNoteId)
  })),

  should_get_note_by_name_and_alt: scenario({}, parametrized3([
    ['A', '♭', 'A♭'],
    ['B', null, 'B'],
    ['C', '♯', 'C♯'],
    [null, null, null],
  ], (currentNoteName: ?NoteName, currentNoteAlt: ?NoteAlt, expectedNoteId: ?string) => {
    given()
      .a_note_repository().and()
      .a_note_name_$(currentNoteName).and()
      .a_note_alt_$(currentNoteAlt)
    when().get_note_by_name_and_alt()
    then().should_have_id_$(expectedNoteId)
  })),

  should_get_next_note: scenario({}, parametrized2([
    ['A♭', 'A'], ['A', 'A♯'], ['A♯', 'B'],
    ['B♭', 'B'], ['B', 'B♯'], ['B♯', 'C♯'],
    ['C♭', 'C'], ['C', 'C♯'], ['C♯', 'D'],
    ['D♭', 'D'], ['D', 'D♯'], ['D♯', 'E'],
    ['E♭', 'E'], ['E', 'E♯'], ['E♯', 'F♯'],
    ['F♭', 'F'], ['F', 'F♯'], ['F♯', 'G'],
    ['G♭', 'G'], ['G', 'G♯'], ['G♯', 'A'],
    ['bad', null],
  ], (currentNoteId: string, expectedNextNoteId: ?string) => {
    given()
      .a_note_repository().and()
      .a_note_id_$(currentNoteId)
    when()
      .get_note_by_id().and()
      .get_next_note()
    then().should_have_next_id_$(expectedNextNoteId)
  })),

  should_get_twin_note: scenario({}, parametrized2([
    ['A♭', 'G♯'], ['A', null], ['A♯', 'B♭'],
    ['B♭', 'A♯'], ['B', 'C♭'], ['B♯', 'C'],
    ['C♭', 'B'], ['C', 'B♯'], ['C♯', 'D♭'],
    ['D♭', 'C♯'], ['D', null], ['D♯', 'E♭'],
    ['E♭', 'D♯'], ['E', 'F♭'], ['E♯', 'F'],
    ['F♭', 'E'], ['F', 'E♯'], ['F♯', 'G♭'],
    ['G♭', 'F♯'], ['G', null], ['G♯', 'A♭'],
    ['bad', null],
  ], (currentNoteId: string, expectedTwinNoteId: ?string) => {
    given()
      .a_note_repository().and()
      .a_note_id_$(currentNoteId)
    when()
      .get_note_by_id().and()
      .get_twin_note()
    then().should_have_twin_id_$(expectedTwinNoteId)
  })),

  should_get_note_position: scenario({}, parametrized2([
    ['A♭', 0], ['A', 1], ['A♯', 2],
    ['B♭', 2], ['B', 3], ['B♯', 4],
    ['C♭', 3], ['C', 4], ['C♯', 5],
    ['D♭', 5], ['D', 6], ['D♯', 7],
    ['E♭', 7], ['E', 8], ['E♯', 9],
    ['F♭', 8], ['F', 9], ['F♯', 10],
    ['G♭', 10], ['G', 11], ['G♯', 0],
    ['bad', null],
  ], (currentNoteId: string, expectedPosition: ?number) => {
    given()
      .a_note_repository().and()
      .a_note_id_$(currentNoteId)
    when()
      .get_note_by_id().and()
      .get_note_position()
    then().should_have_position_$(expectedPosition)
  })),
}))
