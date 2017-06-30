// @flow

import {
  parametrized2,
  scenario,
  scenarios,
  setupForRspec,
  Stage,
} from 'js-given';

declare function describe(suiteMessage: string, suite:() => void): void;
declare function it(testMessage: string, test:() => void | Promise<void>): void;

import Note from './Note.class';
import noteRepository from './Note.repository';

setupForRspec(describe, it);

class NoteStage extends Stage {
  note: ?Note;
  nextNote: ?Note;
  twinNote: ?Note;

  // ----- Given ----- //

  a_note_$(noteId: string): this {
    this.note = noteRepository.getById(noteId);

    return this;
  }

  // ----- When ----- //

  compute_next_note(): this {
    this.nextNote = this.note
      ? noteRepository.getNext(this.note)
      : null;

    return this;
  }

  // ----- Then ----- //

  should_get_a_$(expectedNoteId: string): this {
    const expectedNote = noteRepository.getById(expectedNoteId);

    expect(this.note).not.toBeNull();
    expect(this.nextNote).not.toBeNull();
    expect(expectedNote).not.toBeNull();

    if (this.nextNote && expectedNote) {
      expect(this.nextNote.position).toEqual(expectedNote.position);
    }

    return this;
  }
}

scenarios('Note', NoteStage, ({given, when, then}) => ({
  should_compute_valid_next_note: scenario({}, parametrized2([
    ['a-flat', 'a-natural'],
    ['a-natural', 'a-sharp'],
    ['a-sharp', 'b-natural'],
    ['b-flat', 'b-natural'],
    ['b-natural', 'b-sharp'],
    ['b-sharp', 'c-sharp'],
    ['c-flat', 'c-natural'],
    ['c-natural', 'c-sharp'],
    ['c-sharp', 'd-natural'],
    ['d-flat', 'd-natural'],
    ['d-natural', 'd-sharp'],
    ['d-sharp', 'e-natural'],
    ['e-flat', 'e-natural'],
    ['e-natural', 'e-sharp'],
    ['e-sharp', 'f-sharp'],
    ['f-flat', 'f-natural'],
    ['f-natural', 'f-sharp'],
    ['f-sharp', 'g-natural'],
    ['g-flat', 'g-natural'],
    ['g-natural', 'g-sharp'],
    ['g-sharp', 'a-natural'],
  ], (currentNote: string, expectedNote: string) => {
    given().a_note_$(currentNote);
    when().compute_next_note();
    then().should_get_a_$(expectedNote);
  }))
}));

