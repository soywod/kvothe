import { A, B, C, D, E, F, G } from '../const/NoteName';
import { FLAT, NATURAL, SHARP } from '../const/NoteAlt';
import * as ScaleConst from '../const/Scale';

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

  [ScaleConst.CHROMATIC]: 'Chromatic',

  [ScaleConst.MAJOR]: 'Major (Ionian)',
  [ScaleConst.MINOR]: 'Minor (Aeolian)',

  [ScaleConst.DORIAN]    : 'Dorian',
  [ScaleConst.PHRYGIAN]  : 'Phrygian',
  [ScaleConst.LYDIAN]    : 'Lydian',
  [ScaleConst.MIXOLYDIAN]: 'Mixolydian',
  [ScaleConst.LOCRIAN]   : 'Locrian',

  [ScaleConst.MINOR_MELODIC] : 'Minor (Melodic)',
  [ScaleConst.MINOR_HARMONIC]: 'Minor (Harmonic)',

  'degree-0' : 'P1',
  'degree-1' : 'm2',
  'degree-2' : 'M2',
  'degree-3' : 'm3',
  'degree-4' : 'M3',
  'degree-5' : 'P4',
  'degree-6' : 'd5',
  'degree-7' : 'P5',
  'degree-8' : 'm6',
  'degree-9' : 'M6',
  'degree-10': 'm7',
  'degree-11': 'M7',

  'step-1': '0.5',
  'step-2': '1',
  'step-3': '1.5',
  'step-4': '2',
};

const label = key => labels[key] || key;

export default label;
