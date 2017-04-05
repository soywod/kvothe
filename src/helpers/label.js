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

  [ScaleConst.MAJOR]: 'Major',
  [ScaleConst.MINOR]: 'Minor',

  [ScaleConst.IONIAN]    : 'Ionian',
  [ScaleConst.DORIAN]    : 'Dorian',
  [ScaleConst.PHRYGIAN]  : 'Phrygian',
  [ScaleConst.LYDIAN]    : 'Lydian',
  [ScaleConst.MIXOLYDIAN]: 'Mixolydian',
  [ScaleConst.AEOLIAN]   : 'Aeolian',
  [ScaleConst.LOCRIAN]   : 'Locrian',

  [ScaleConst.MINOR_MELODIC] : 'Minor melodic',
  [ScaleConst.MINOR_HARMONIC]: 'Minor harmonic',

  'degree-0' : 'P1',
  'degree-1' : 'b2',
  'degree-2' : '2',
  'degree-3' : 'b3',
  'degree-4' : '3',
  'degree-5' : '4',
  'degree-6' : 'b5',
  'degree-7' : '5',
  'degree-8' : 'b6',
  'degree-9' : '6',
  'degree-10': 'b7',
  'degree-11': '7',

  'step-1': '0.5',
  'step-2': '1',
  'step-3': '1.5',
  'step-4': '2',
};

const label = key => labels[key] || key;

export default label;
