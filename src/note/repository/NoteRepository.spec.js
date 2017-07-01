// @flow

import {
  parametrized1,
  parametrized2,
  scenario,
  scenarios,
  setupForRspec,
  Stage,
} from 'js-given';

declare function describe(suiteMessage: string, suite:() => void): void;
declare function it(testMessage: string, test:() => void | Promise<void>): void;

import Note from '../Note';
import type {NoteRepository} from './NoteRepository.type';
import {NB_POSITIONS} from './NoteRepository.type';
import noteRepository from './NoteRepository';

setupForRspec(describe, it);

class NoteStage extends Stage {
  noteRepository: NoteRepository;
  noteId: string;
  note: ?Note;
  nextNote: ?Note;
  twinNote: ?Note;

  // ----- Given ----- //

  a_note_repository(noteRepository: NoteRepository): this {
    this.noteRepository = noteRepository;
    return this;
  }

  a_note_id_$(noteId: string): this {
    this.noteId = noteId;
    return this;
  }

  // ----- When ----- //

  init_note_repository(): this {
    this.noteRepository.init();
    return this;
  }

  get_note_by_id(): this {
    this.note = this.noteRepository.getById(this.noteId);
    return this;
  }

  get_next_note(): this {
    this.nextNote = this.note
      ? this.noteRepository.getNext(this.note)
      : null;

    return this;
  }

  // ----- Then ----- //

  should_have_valid_mapping(): this {
    expect(Object.keys(this.noteRepository.notes)).toHaveLength(21);

    expect(this.noteRepository.notes).toHaveProperty('a-flat');
    expect(this.noteRepository.notes).toHaveProperty('a-natural');
    expect(this.noteRepository.notes).toHaveProperty('a-sharp');
    expect(this.noteRepository.notes).toHaveProperty('a-flat');
    expect(this.noteRepository.notes).toHaveProperty('b-natural');
    expect(this.noteRepository.notes).toHaveProperty('b-sharp');
    expect(this.noteRepository.notes).toHaveProperty('b-flat');
    expect(this.noteRepository.notes).toHaveProperty('c-natural');
    expect(this.noteRepository.notes).toHaveProperty('c-sharp');
    expect(this.noteRepository.notes).toHaveProperty('c-flat');
    expect(this.noteRepository.notes).toHaveProperty('d-natural');
    expect(this.noteRepository.notes).toHaveProperty('d-sharp');
    expect(this.noteRepository.notes).toHaveProperty('d-flat');
    expect(this.noteRepository.notes).toHaveProperty('e-natural');
    expect(this.noteRepository.notes).toHaveProperty('e-sharp');
    expect(this.noteRepository.notes).toHaveProperty('e-flat');
    expect(this.noteRepository.notes).toHaveProperty('f-natural');
    expect(this.noteRepository.notes).toHaveProperty('f-sharp');
    expect(this.noteRepository.notes).toHaveProperty('f-flat');
    expect(this.noteRepository.notes).toHaveProperty('g-natural');
    expect(this.noteRepository.notes).toHaveProperty('g-sharp');

    expect(this.noteRepository.notes['a-flat']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['a-natural']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['a-sharp']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['b-flat']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['b-natural']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['b-sharp']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['c-flat']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['c-natural']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['c-sharp']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['d-flat']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['d-natural']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['d-sharp']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['e-flat']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['e-natural']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['e-sharp']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['f-flat']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['f-natural']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['f-sharp']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['g-flat']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['g-natural']).toBeInstanceOf(Note);
    expect(this.noteRepository.notes['g-sharp']).toBeInstanceOf(Note);

    return this;
  }

  should_have_id_$(expectedNoteId: ?string): this {
    if (expectedNoteId === null || expectedNoteId === undefined) {
      expect(this.note).toBeNull();
      return this;
    } 

    if (expectedNoteId !== null && expectedNoteId !== undefined) {
      expect(this.note).not.toBeNull();

      if (this.note) {
        expect(this.note.id).toEqual(expectedNoteId);
      }
    }

    return this;
  }

  should_have_next_id_$(expectedNextNoteId: ?string): this {
    if (expectedNextNoteId === null || expectedNextNoteId === undefined) {
      expect(this.note).toBeNull();
      expect(this.nextNote).toBeNull();
    } 

    if (expectedNextNoteId !== null && expectedNextNoteId !== undefined) {
      expect(this.note).not.toBeNull();
      expect(this.nextNote).not.toBeNull();

      if (this.note && this.nextNote) {
        const expectedNextNotePosition = (this.note.position + NB_POSITIONS + 1) % NB_POSITIONS;
        expect(this.nextNote.position).toEqual(expectedNextNotePosition);
      }
    }

    return this;
  }
}

scenarios('Note repository', NoteStage, ({given, when, then}) => ({
  should_init_notes_mapping: scenario({}, () => {
    given().a_note_repository(noteRepository);

    when().init_note_repository();

    then().should_have_valid_mapping();
  }),

  should_get_note_by_id: scenario({}, parametrized2([
    ['a-flat', 'a-flat'],
    ['b-natural', 'b-natural'],
    ['c-sharp', 'c-sharp'],
    ['bad', null],
  ], (currentNoteId: string, expectedNextNoteId: ?string) => {
    given()
      .a_note_repository(noteRepository).and()
      .a_note_id_$(currentNoteId);

    when().get_note_by_id();

    then().should_have_id_$(expectedNextNoteId);
  })),

  should_get_next_note: scenario({}, parametrized2([
    ['a-flat', 'a-natural'], ['a-natural', 'a-sharp'], ['a-sharp', 'b-natural'],
    ['b-flat', 'b-natural'], ['b-natural', 'b-sharp'], ['b-sharp', 'c-sharp'],
    ['c-flat', 'c-natural'], ['c-natural', 'c-sharp'], ['c-sharp', 'd-natural'],
    ['d-flat', 'd-natural'], ['d-natural', 'd-sharp'], ['d-sharp', 'e-natural'],
    ['e-flat', 'e-natural'], ['e-natural', 'e-sharp'], ['e-sharp', 'f-sharp'],
    ['f-flat', 'f-natural'], ['f-natural', 'f-sharp'], ['f-sharp', 'g-natural'],
    ['g-flat', 'g-natural'], ['g-natural', 'g-sharp'], ['g-sharp', 'a-natural'],
    ['bad', null],
  ], (currentNoteId: string, expectedNextNoteId: ?string) => {
    given()
      .a_note_repository(noteRepository).and()
      .a_note_id_$(currentNoteId);

    when()
      .get_note_by_id().and()
      .get_next_note();

    then().should_have_next_id_$(expectedNextNoteId);
  })),
}));

