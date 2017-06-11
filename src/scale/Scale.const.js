// @flow

const P1 = 1;
const m2 = P1 << 1;
const M2 = P1 << 2;
const m3 = P1 << 3;
const M3 = P1 << 4;
const P4 = P1 << 5;
const A4 = P1 << 6;
const d5 = P1 << 6;
const P5 = P1 << 7;
const m6 = P1 << 8;
const M6 = P1 << 9;
const m7 = P1 << 10;
const M7 = P1 << 11;

const FORMULAS = {
  'chromatic': P1 | m2 | M2 | m3 | M3 | P4 | d5 | P5 | m6 | M6 | m7 | M7,

  'major': P1 | M2 | M3 | P4 | P5 | M6 | M7,
  'minor': P1 | M2 | m3 | P4 | P5 | m6 | m7,

  'ionian': P1 | M2 | M3 | P4 | P5 | M6 | M7,
  'dorian': P1 | M2 | m3 | P4 | P5 | M6 | m7,
  'phrygian': P1 | m2 | m3 | P4 | P5 | m6 | m7,
  'lydian': P1 | M2 | M3 | A4 | P5 | M6 | M7,
  'mixolydian': P1 | M2 | M3 | P4 | P5 | M6 | m7,
  'aeolian': P1 | M2 | m3 | P4 | P5 | m6 | m7,
  'locrian': P1 | m2 | m3 | P4 | d5 | m6 | m7,

  'minor-harmonic': P1 | M2 | m3 | P4 | P5 | m6 | M7,
  'minor-melodic': P1 | M2 | m3 | P4 | P5 | M6 | M7,
};

const SCALES = [
  FORMULAS['major'],
  FORMULAS['minor'],
  FORMULAS['minor-harmonic'],
  FORMULAS['minor-melodic'],
];

const MODES = [
  FORMULAS['dorian'],
  FORMULAS['phrygian'],
  FORMULAS['lydian'],
  FORMULAS['mixolydian'],
  FORMULAS['locrian'],
];

export {
  P1, m2, M2, m3, M3, P4, A4, d5, P5, m6, M6, m7, M7,
  FORMULAS,
  SCALES,
  MODES,
};

