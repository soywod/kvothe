// @flow

const labels = {
  'A': 'A',
  'B': 'B',
  'C': 'C',
  'D': 'D',
  'E': 'E',
  'F': 'F',
  'G': 'G',

  '♭': '♭',
  '♯': '♯',

  'Major': 'Major',
  'Minor': 'Minor',
  'Minor melodic': 'Minor melodic',
  'Minor harmonic': 'Minor harmonic',

  'Ionian': 'Ionian',
  'Dorian': 'Dorian',
  'Phrygian': 'Phrygian',
  'Lydian': 'Lydian',
  'Mixolydian': 'Mixolydian',
  'Aeolian': 'Aeolian',
  'Locrian': 'Locrian',

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
};

const label = (key: any) => labels[key] || ''

export default label
