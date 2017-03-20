import { MAJOR, MINOR_NATURAL } from "./ScaleName";

const P1 = parseInt(1, 2);
const m2 = parseInt(10, 2);
const M2 = parseInt(100, 2);
const m3 = parseInt(1000, 2);
const M3 = parseInt(10000, 2);
const P4 = parseInt(100000, 2);
const d5 = parseInt(1000000, 2);
const P5 = parseInt(10000000, 2);
const A5 = parseInt(100000000, 2);
const m6 = parseInt(1000000000, 2);
const M6 = parseInt(10000000000, 2);
const m7 = parseInt(100000000000, 2);
const M7 = parseInt(1000000000000, 2);

const SCALE_TYPES = {
  [MAJOR]: P1 | M2 | M3 | P4 | P5 | M6 | M7,
  [MINOR_NATURAL]: P1 | M2 | m3 | P4 | P5 | m6 | m7
};

export default SCALE_TYPES;
