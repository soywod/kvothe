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
      case 'a-flat': return 0;
      case 'g-sharp': return 0;
      case 'a-natural': return 1;
      case 'a-sharp': return 2;
      case 'b-flat': return 2;
      case 'b-natural': return 3;
      case 'c-flat': return 3;
      case 'b-sharp': return 4;
      case 'c-natural': return 4;
      case 'c-sharp': return 5;
      case 'd-flat': return 5;
      case 'd-natural': return 6;
      case 'd-sharp': return 7;
      case 'e-flat': return 7;
      case 'e-natural': return 8;
      case 'f-flat': return 8;
      case 'e-sharp': return 9;
      case 'f-natural': return 9;
      case 'f-sharp': return 10;
      case 'g-flat': return 10;
      case 'g-natural': return 11;

      default: return -1;
    }
  }
}

export default Note;

