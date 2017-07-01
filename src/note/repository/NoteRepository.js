// @flow

import {
  forEach,
  findKey,
  isNil,
} from 'lodash';

import Note from '../Note';
import type {
  NoteMap,
  NoteName,
  NoteAlt
} from '../Note.type';

import type {NoteRepository} from './NoteRepository.type';
import {NB_POSITIONS} from './NoteRepository.type';

const noteRepository: NoteRepository = {
  hasBeenInit: false,
  notes: {},

  init() {
    if (this.hasBeenInit) {
      return;
    }

    this.notes = {};

    forEach(['a', 'b', 'c', 'd', 'e', 'f', 'g'], (name: NoteName) => {
      forEach(['flat', 'natural', 'sharp'], (alt: NoteAlt) => {
        const params = {name, alt};
        const note = new Note(params);

        this.notes[note.id] = note;
      });
    });

    this.hasBeenInit = true;
  },

  getById(id) {
    this.init();
    return this.notes[id] || null;
  },

  getByNameAndAlt(noteName, noteAlt) {
    this.init();

    const id = findKey(this.notes, (currNote: Note) => (
      currNote.name === noteName && currNote.alt === noteAlt
    ));

    if (isNil(id)) {
      return null;
    }

    return this.notes[id];
  },

  getNext(note, offset = 1) {
    this.init();

    const nextPosition = (note.position + offset) % NB_POSITIONS;
    const id = findKey(this.notes, (currNote: Note) => (
      currNote.position === nextPosition
    ));
    
    if (isNil(id)) {
      throw new Error('Note not found');
    }

    return this.notes[id];
  },

  getTwin(note) {
    this.init();

    const id = findKey(this.notes, (currNote: Note) => (
      currNote.id !== note.id && currNote.position === note.position
    ));

    if (isNil(id)) {
      return null;
    }

    return this.notes[id];
  },
};

export default noteRepository;

