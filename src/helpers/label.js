// @flow

import {FORMULAS} from '../scale/Scale.const';

const labels = {
  'a': 'A',
  'b': 'B',
  'c': 'C',
  'd': 'D',
  'e': 'E',
  'f': 'F',
  'g': 'G',

  'flat': '♭',
  'natural': ' ',
  'sharp': '♯',

  [FORMULAS['chromatic']]: 'Chromatic',

  [FORMULAS['major']]: 'Major',
  [FORMULAS['minor']]: 'Minor',

  [FORMULAS['dorian']] : 'Dorian',
  [FORMULAS['phrygian']] : 'Phrygian',
  [FORMULAS['lydian']] : 'Lydian',
  [FORMULAS['mixolydian']] : 'Mixolydian',
  [FORMULAS['locrian']] : 'Locrian',

  [FORMULAS['minor-melodic']] : 'Minor melodic',
  [FORMULAS['minor-harmonic']]: 'Minor harmonic',

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

