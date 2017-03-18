import { A, B, C, D, E, F, G } from '../const/NoteName';
import { FLAT, NATURAL, SHARP } from '../const/NoteAlt';

const labels = {
  [A]: 'A',
  [B]: 'B',
  [C]: 'C',
  [D]: 'D',
  [E]: 'E',
  [F]: 'F',
  [G]: 'G',

  [FLAT]   : '♭',
  [NATURAL]: ' ',
  [SHARP]  : '♯',
};

const label = key => labels[key] || key;

export default label;
