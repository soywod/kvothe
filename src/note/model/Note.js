// @flow

type NoteName = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
type NoteAlt = '♭' | '♯';

type NoteParams = {
  name: NoteName;
  alt: ?NoteAlt;
};

class Note {
  id: string;
  name: NoteName;
  alt: ?NoteAlt;

  constructor(params: NoteParams) {
    const {name, alt} = params

    this.id = `${name}${alt || ''}`
    this.name = name
    this.alt = alt
  }
}

export type {NoteName, NoteAlt}
export default Note
