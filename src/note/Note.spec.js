// @flow

import {
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

class NextNoteStage extends Stage {
  note: Note;
  nextNote: Note;

  a_note(note: Note): this {
    this.note = note;
    return this;
  }

  get_next_note(): this {
    this.nextNote = noteRepository.getNext(this.note);
    return this;
  }

  should_have(expectedNote: Note): this {
    expect(this.nextNote.position).toEqual(expectedNote.position);
    return this;
  }
}

scenarios('Next note', NextNoteStage, ({given, when, then}) => {
  const note = new Note({name: 'a', alt: 'natural'});
  const nextNote = new Note({name: 'a', alt: 'sharp'});

  return {
    should_get_valid_next_note: scenario({}, () => {
      given().a_note(note);
      when().get_next_note();
      then().should_have(nextNote);
    }),
  };
});

