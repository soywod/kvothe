// @flow

import Note from './Note.class';
import type {
  NoteMap,
  NoteName,
  NoteAlt
} from './Note.type';

export const NB_POSITIONS = 12;

export type NoteRepository = {
  hasBeenInit: boolean;
  notes: NoteMap;
  
  init(): void;
  getById(id: string): ?Note;
  getByNameAndAlt(noteName: NoteName, noteAlt: NoteAlt): ?Note;
  getNext(note: Note, offset?: number): Note;
  getTwin(note: Note): ?Note;
};

