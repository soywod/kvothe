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

import type {NoteName, NoteAlt} from './Note.type';
import Note from './Note';

setupForRspec(describe, it);

class NoteStage extends Stage {
  id: string;
  name: ?NoteName;
  alt: ?NoteAlt;
  position: number;

  note: ?Note;

  // ----- Given ----- //

  a_note_id_$(id: string): this {
    this.id = id;
    return this;
  }

  a_note_name_$(name: ?NoteName): this {
    this.name = name;
    return this;
  }

  a_note_alt_$(alt: ?NoteAlt): this {
    this.alt = alt;
    return this;
  }

  // ----- When ----- //

  construct_note(): this {
    if (! this.name || ! this.alt) {
      return this;
    }

    const params = {
      name: this.name,
      alt: this.alt,
    };

    this.note = new Note(params);

    return this;
  }

  get_note_position_by_id(): this {
    this.position = Note.getPositionById(this.id);
    return this;
  }

  // ----- Then ----- //

  should_have_valid_instance(expectedNoteId: ?string): this {
    const note = this.note;

    expect(note).not.toBeNull();

    if (note !== null && note !== undefined) {
      expect(note).toBeInstanceOf(Note);
      expect(note.name).toBeDefined();
      expect(note.alt).toBeDefined();
      expect(note.id).toBeDefined();
      expect(note.position).toBeDefined();

      expect(note.id).toEqual(expectedNoteId);
    }
    return this;
  }

  should_have_position_$(expectedPosition: ?number): this {
    expect(this.position).toEqual(expectedPosition);
    return this;
  }
}

scenarios('Note', NoteStage, ({given, when, then}) => ({
  should_create_a_note: scenario({}, () => {
    given()
      .a_note_name_$('a').and()
      .a_note_alt_$('flat');

    when().construct_note();

    then().should_have_valid_instance('a-flat');
  }),

  should_get_note_position_by_id: scenario({}, parametrized2([
    ['a-flat', 0], ['a-natural', 1], ['a-sharp', 2],
    ['b-flat', 2], ['b-natural', 3], ['b-sharp', 4],
    ['c-flat', 3], ['c-natural', 4], ['c-sharp', 5],
    ['d-flat', 5], ['d-natural', 6], ['d-sharp', 7],
    ['e-flat', 7], ['e-natural', 8], ['e-sharp', 9],
    ['f-flat', 8], ['f-natural', 9], ['f-sharp', 10],
    ['g-flat', 10], ['g-natural', 11], ['g-sharp', 0],
    ['bad', -1],
  ], (currentNoteId: string, expectedPosition: number) => {
    given().a_note_id_$(currentNoteId);

    when().get_note_position_by_id();

    then().should_have_position_$(expectedPosition);
  })),
}));

