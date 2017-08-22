// @flow

declare function describe(suiteMessage: string, suite:() => void): void;
declare function it(testMessage: string, test:() => void | Promise<void>): void;

import {
  parametrized2,
  parametrized3,
  scenario,
  scenarios,
  setupForRspec,
  Stage,
} from 'js-given';

import type {NoteName, NoteAlt} from '../Note.type';

import Note from '../Note';
import {NB_POSITIONS} from './NoteRepository.type';
import noteRepository from './NoteRepository';

setupForRspec(describe, it);

class NoteRepositoryStage extends Stage {
  noteId: string;
  noteName: ?NoteName;
  noteAlt: ?NoteAlt;

  note: ?Note;
  nextNote: ?Note;
  twinNote: ?Note;

  // ----- Given ----- //

  a_note_id_$(noteId: string): this {
    this.noteId = noteId;
    return this;
  }

  a_note_name_$(noteName: ?NoteName): this {
    this.noteName = noteName;
    return this;
  }

  a_note_alt_$(noteAlt: ?NoteAlt): this {
    this.noteAlt = noteAlt;
    return this;
  }

  // ----- When ----- //

  init_note_repository(): this {
    noteRepository.init();
    return this;
  }

  get_note_by_id(): this {
    this.note = noteRepository.getById(this.noteId);
    return this;
  }

  get_note_by_name_and_alt(): this {
    this.note = this.noteName && this.noteAlt
      ? noteRepository.getByNameAndAlt(this.noteName, this.noteAlt)
      : null;

    return this;
  }

  get_next_note(): this {
    this.nextNote = this.note
      ? noteRepository.getNext(this.note)
      : null;

    return this;
  }
  
  get_twin_note(): this {
    this.twinNote = this.note
      ? noteRepository.getTwin(this.note)
      : null;

    return this;
  }

  // ----- Then ----- //

  should_have_valid_mapping(): this {
    expect(Object.keys(noteRepository.notes)).toHaveLength(21);

    expect(noteRepository.notes).toHaveProperty('a-flat');
    expect(noteRepository.notes).toHaveProperty('a-natural');
    expect(noteRepository.notes).toHaveProperty('a-sharp');
    expect(noteRepository.notes).toHaveProperty('a-flat');
    expect(noteRepository.notes).toHaveProperty('b-natural');
    expect(noteRepository.notes).toHaveProperty('b-sharp');
    expect(noteRepository.notes).toHaveProperty('b-flat');
    expect(noteRepository.notes).toHaveProperty('c-natural');
    expect(noteRepository.notes).toHaveProperty('c-sharp');
    expect(noteRepository.notes).toHaveProperty('c-flat');
    expect(noteRepository.notes).toHaveProperty('d-natural');
    expect(noteRepository.notes).toHaveProperty('d-sharp');
    expect(noteRepository.notes).toHaveProperty('d-flat');
    expect(noteRepository.notes).toHaveProperty('e-natural');
    expect(noteRepository.notes).toHaveProperty('e-sharp');
    expect(noteRepository.notes).toHaveProperty('e-flat');
    expect(noteRepository.notes).toHaveProperty('f-natural');
    expect(noteRepository.notes).toHaveProperty('f-sharp');
    expect(noteRepository.notes).toHaveProperty('f-flat');
    expect(noteRepository.notes).toHaveProperty('g-natural');
    expect(noteRepository.notes).toHaveProperty('g-sharp');

    expect(noteRepository.notes['a-flat']).toBeInstanceOf(Note);
    expect(noteRepository.notes['a-natural']).toBeInstanceOf(Note);
    expect(noteRepository.notes['a-sharp']).toBeInstanceOf(Note);
    expect(noteRepository.notes['b-flat']).toBeInstanceOf(Note);
    expect(noteRepository.notes['b-natural']).toBeInstanceOf(Note);
    expect(noteRepository.notes['b-sharp']).toBeInstanceOf(Note);
    expect(noteRepository.notes['c-flat']).toBeInstanceOf(Note);
    expect(noteRepository.notes['c-natural']).toBeInstanceOf(Note);
    expect(noteRepository.notes['c-sharp']).toBeInstanceOf(Note);
    expect(noteRepository.notes['d-flat']).toBeInstanceOf(Note);
    expect(noteRepository.notes['d-natural']).toBeInstanceOf(Note);
    expect(noteRepository.notes['d-sharp']).toBeInstanceOf(Note);
    expect(noteRepository.notes['e-flat']).toBeInstanceOf(Note);
    expect(noteRepository.notes['e-natural']).toBeInstanceOf(Note);
    expect(noteRepository.notes['e-sharp']).toBeInstanceOf(Note);
    expect(noteRepository.notes['f-flat']).toBeInstanceOf(Note);
    expect(noteRepository.notes['f-natural']).toBeInstanceOf(Note);
    expect(noteRepository.notes['f-sharp']).toBeInstanceOf(Note);
    expect(noteRepository.notes['g-flat']).toBeInstanceOf(Note);
    expect(noteRepository.notes['g-natural']).toBeInstanceOf(Note);
    expect(noteRepository.notes['g-sharp']).toBeInstanceOf(Note);

    return this;
  }

  should_have_id_$(expectedNoteId: ?string): this {
    if (expectedNoteId === null || expectedNoteId === undefined) {
      expect(this.note).toBeNull();
      return this;
    }

    else if (expectedNoteId !== null && expectedNoteId !== undefined) {
      expect(this.note).not.toBeNull();

      if (this.note) {
        expect(this.note.id).toEqual(expectedNoteId);
      }
    }

    return this;
  }

  should_have_next_id_$(expectedNextNoteId: ?string): this {
    if (expectedNextNoteId === null || expectedNextNoteId === undefined) {
      expect(this.nextNote).toBeNull();
    }

    else if (expectedNextNoteId !== null && expectedNextNoteId !== undefined) {
      const expectedNextNote = noteRepository.getById(expectedNextNoteId);

      expect(this.note).not.toBeNull();
      expect(this.nextNote).not.toBeNull();
      expect(expectedNextNote).not.toBeNull();

      if (this.nextNote && expectedNextNote) {
        expect(this.nextNote.position).toEqual(expectedNextNote.position);
      }
    }

    return this;
  }

  should_have_twin_id_$(expectedTwinNoteId: ?string): this {
    if (expectedTwinNoteId === null || expectedTwinNoteId === undefined) {
      expect(this.twinNote).toBeNull();
    } 

    else if (expectedTwinNoteId !== null && expectedTwinNoteId !== undefined) {
      expect(this.note).not.toBeNull();
      expect(this.twinNote).not.toBeNull();

      if (this.twinNote) {
        expect(this.twinNote.id).toEqual(expectedTwinNoteId);
      }
    }

    return this;
  }
}

scenarios('Note repository', NoteRepositoryStage, ({given, when, then}) => ({
  should_init_notes_mapping: scenario({}, () => {
    when().init_note_repository();

    then().should_have_valid_mapping();
  }),

  should_get_note_by_id: scenario({}, parametrized2([
    ['a-flat', 'a-flat'],
    ['b-natural', 'b-natural'],
    ['c-sharp', 'c-sharp'],
    ['bad', null],
  ], (currentNoteId: string, expectedNextNoteId: ?string) => {
    given() .a_note_id_$(currentNoteId);

    when().get_note_by_id();

    then().should_have_id_$(expectedNextNoteId);
  })),

  should_get_note_by_name_and_alt: scenario({}, parametrized3([
    ['a', 'flat', 'a-flat'],
    ['b', 'natural', 'b-natural'],
    ['c', 'sharp', 'c-sharp'],
    ['d', null, null],
    [null, 'natural', null],
    [null, null, null],
  ], (currentNoteName: ?NoteName, currentNoteAlt: ?NoteAlt, expectedNextNoteId: ?string) => {
    given()
      .a_note_name_$(currentNoteName).and()
      .a_note_alt_$(currentNoteAlt);

    when().get_note_by_name_and_alt();

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
    given() .a_note_id_$(currentNoteId);

    when()
      .get_note_by_id().and()
      .get_next_note();

    then().should_have_next_id_$(expectedNextNoteId);
  })),

  should_get_twin_note: scenario({}, parametrized2([
    ['a-flat', 'g-sharp'], ['a-natural', null], ['a-sharp', 'b-flat'],
    ['b-flat', 'a-sharp'], ['b-natural', 'c-flat'], ['b-sharp', 'c-natural'],
    ['c-flat', 'b-natural'], ['c-natural', 'b-sharp'], ['c-sharp', 'd-flat'],
    ['d-flat', 'c-sharp'], ['d-natural', null], ['d-sharp', 'e-flat'],
    ['e-flat', 'd-sharp'], ['e-natural', 'f-flat'], ['e-sharp', 'f-natural'],
    ['f-flat', 'e-natural'], ['f-natural', 'e-sharp'], ['f-sharp', 'g-flat'],
    ['g-flat', 'f-sharp'], ['g-natural', null], ['g-sharp', 'a-flat'],
    ['bad', null],
  ], (currentNoteId: string, expectedTwinNoteId: ?string) => {
    given().a_note_id_$(currentNoteId);

    when()
      .get_note_by_id().and()
      .get_twin_note();

    then().should_have_twin_id_$(expectedTwinNoteId);
  })),
}));

