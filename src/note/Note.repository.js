// @flow

import {forEach, findKey} from 'lodash';

import type {NoteMap, NoteName, NoteAlt} from './Note.type';
import Note from './Note.class';

const NB_POSITIONS = 12;

class NoteRepository {
  notes: NoteMap;

  constructor() {
    this.notes = {};

    forEach(['A', 'B', 'C', 'D', 'E', 'F', 'G'], (name: NoteName) => {
      forEach(['FLAT', 'NATURAL', 'SHARP'], (alt: NoteAlt) => {
        const params = {name, alt};
        const note = new Note(params);

        this.notes[note.id] = note;
      });
    });
  }

  getById(id: string) {
    return this.notes[id] || null;
  }

  getByNameAndAlt(noteName: NoteName, noteAlt: NoteAlt): ?Note {
    const id = findKey(this.notes, (currNote: Note) => (
      currNote.name === noteName && currNote.alt === noteAlt
    ));

    if (! id) return null;

    return this.notes[id];
  }

  getNext(note: Note): Note {
    const nextPosition = (note.position + 1) % NB_POSITIONS;

    const id = findKey(this.notes, (currNote: Note) => (
      currNote.position === nextPosition
    ));

    return this.notes[id];
  }

  getTwin(note: Note): ?Note {
    const id = findKey(this.notes, (currNote: Note) => (
      currNote.id === note.id && currNote.position === note.position
    ));

    if (! id) return null;

    return this.notes[id];
  }
}

const noteRepository = new NoteRepository;

export default noteRepository;

