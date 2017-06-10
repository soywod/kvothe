// @flow

import Note from './Note.class';

type NoteMap = {
  [id: string]: Note;
};

type NoteName = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
type NoteAlt = 'FLAT' | 'NATURAL' | 'SHARP';

export type {
  NoteName,
  NoteAlt,
  NoteMap,
};

