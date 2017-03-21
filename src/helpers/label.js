import { A, B, C, D, E, F, G } from '../const/NoteName';
import { FLAT, NATURAL, SHARP } from '../const/NoteAlt';
import {
  MAJOR,
  MINOR_NATURAL,
  MINOR_MELODIC,
  MINOR_HARMONIC
} from '../const/Scale';

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

  [MAJOR]         : 'Major',
  [MINOR_NATURAL] : 'Minor',
  [MINOR_MELODIC] : 'Minor (melodic)',
  [MINOR_HARMONIC]: 'Minor (harmonic)',
};

const label = key => labels[key] || key;

export default label;
