// @flow

import type {NoteName, NoteAlt} from './Note.type';

type NoteParams = {
  name: NoteName;
  alt: NoteAlt;
};

class Note {
  id: string;
  position: number;
  name: NoteName;
  alt: NoteAlt;

  constructor(params: NoteParams) {
    const {name, alt} = params;

    this.name = name;
    this.alt = alt;

    this.id = `${this.name}-${this.alt}`;
    this.position = Note.getPositionById(this.id);
  }

  static getPositionById(id: string): number {
    switch(id) {
      case 'A-FLAT': return 0;
      case 'G-SHARP': return 0;
      case 'A-NATURAL': return 1;
      case 'A-SHARP': return 2;
      case 'B-FLAT': return 2;
      case 'B-NATURAL': return 3;
      case 'C-FLAT': return 3;
      case 'B-SHARP': return 4;
      case 'C-NATURAL': return 4;
      case 'C-SHARP': return 5;
      case 'D-FLAT': return 5;
      case 'D-NATURAL': return 6;
      case 'D-SHARP': return 7;
      case 'E-FLAT': return 7;
      case 'E-NATURAL': return 8;
      case 'F-FLAT': return 8;
      case 'E-SHARP': return 9;
      case 'F-NATURAL': return 9;
      case 'F-SHARP': return 10;
      case 'G-FLAT': return 10;
      case 'G-NATURAL': return 11;

      default: return -1;
    }
  }
}

export default Note;

