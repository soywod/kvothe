export const P1 = 0;
export const m2 = 1;
export const M2 = 2;
export const m3 = 3;
export const M3 = 4;
export const P4 = 5;
export const d5 = 6;
export const P5 = 7;
export const A5 = 7;
export const m6 = 8;
export const M6 = 9;
export const m7 = 10;
export const M7 = 11;

export const MAJOR          = 'major';
export const MINOR_NATURAL  = 'minor-natural';
export const MINOR_HARMONIC = 'minor-harmonic';
export const MINOR_MELODIC  = 'minor-melodic';

export const FORMULA = {
	[MAJOR]         : [P1, M2, M3, P4, P5, M6, M7],
	[MINOR_NATURAL] : [P1, M2, m3, P4, P5, m6, m7],
	[MINOR_HARMONIC]: [P1, M2, m3, P4, P5, m6, M7],
	[MINOR_MELODIC] : [P1, M2, m3, P4, P5, M6, M7],
};
