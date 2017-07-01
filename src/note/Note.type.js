// @flow

import Note from './Note';

type NoteMap = {
  [id: string]: Note;
};

type NoteName = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';
type NoteAlt = 'flat' | 'natural' | 'sharp';

export type {
  NoteName,
  NoteAlt,
  NoteMap,
};

