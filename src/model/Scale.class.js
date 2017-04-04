import _ from 'lodash/fp';

import { FLAT, SHARP } from '../const/NoteAlt';
import * as ScaleConst from '../const/Scale';

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

const allDegrees = [P1, m2, M2, m3, M3, P4, A4, d5, P5, m6, M6, m7, M7];

const formulas = {
  [ScaleConst.CHROMATIC]: P1 | m2 | M2 | m3 | M3 | P4 | d5 | P5 | m6 | M6 | m7 | M7,

  [ScaleConst.MAJOR]: P1 | M2 | M3 | P4 | P5 | M6 | M7,
  [ScaleConst.MINOR]: P1 | M2 | m3 | P4 | P5 | m6 | m7,

  [ScaleConst.IONIAN]    : P1 | M2 | M3 | P4 | P5 | M6 | M7,
  [ScaleConst.DORIAN]    : P1 | M2 | m3 | P4 | P5 | M6 | m7,
  [ScaleConst.PHRYGIAN]  : P1 | m2 | m3 | P4 | P5 | m6 | m7,
  [ScaleConst.LYDIAN]    : P1 | M2 | M3 | A4 | P5 | M6 | M7,
  [ScaleConst.MIXOLYDIAN]: P1 | M2 | M3 | P4 | P5 | M6 | m7,
  [ScaleConst.EOLIAN]    : P1 | M2 | m3 | P4 | P5 | m6 | m7,
  [ScaleConst.LOCRIAN]   : P1 | m2 | m3 | P4 | d5 | m6 | m7,

  [ScaleConst.MINOR_HARMONIC]: P1 | M2 | m3 | P4 | P5 | m6 | M7,
  [ScaleConst.MINOR_MELODIC] : P1 | M2 | m3 | P4 | P5 | M6 | M7,
};

class Scale {
  static getInstance(params) {
    return new Scale(params)
  }

  static getAllDegrees() {
    return allDegrees;
  }

  hasDegree(degree) {
    return (this.formula & degree) === degree;
  }

  getName() {
    return _.findKey(formula => this.formula === formula)(formulas);
  }

  constructor(params) {
    const { formula = null, intervals = null, note = null, notes = [] } = params;

    this.formula   = formulas[formula] || formula;
    this.intervals = intervals;
    this.note      = note;
    this.notes     = notes;

    if (! formula && ! intervals) {
      throw new Error('Missing parameter: formula or intervals.');
    }

    if (! formula) {
      this.initFormula();
    }

    this.initIntervals();

    if (! notes.length) {
      this.initNotes();
    }
  }

  initIntervals() {
    let bit = 1, cursor = 0;

    this.intervals = [];

    for (; bit < formulas[ScaleConst.CHROMATIC]; bit = bit << 1, cursor ++) {
      this.intervals.push((this.formula & bit) === bit ? cursor : null);
    }
  }

  initFormula() {
    this.formula = this.intervals.reduce((formula, degree) => (
      degree === null ? formula : formula | Math.pow(2, degree)
    ), 0);
  }

  initNotes() {
    const notes = this.intervals.map(degree => degree === null ? null : this.note.next(degree));

    this.notes = this.optimize(notes);
  }

  buildAllModes() {
    return this.intervals.map(degree => {
      if (degree === null) return null;

      return Scale.getInstance({
        note     : this.note.next(degree),
        intervals: this.buildIntervals(degree),
        notes    : this.buildNotes(degree),
      });
    });
  }

  buildIntervals(offset) {
    return [
      ...(_.takeRight(offset)(this.intervals)),
      ...(_.dropRight(offset)(this.intervals))
    ].map(degree => degree === null ? null : Math.abs((degree - offset + this.intervals.length)) % this.intervals.length);
  };

  buildNotes(offset) {
    return [
      ...(_.drop(offset)(this.notes)),
      ...(_.take(offset)(this.notes))
    ];
  };

  buildMode(intervals, index) {
    const noteRef = this.note.next(this.intervals[index]);
    const scale   = intervals.map(degree => noteRef.next(degree));

    return this.optimize(scale);
  }

  optimize(scaleRef) {
    const firstResults = [];
    const lastResults  = [];
    let cursor         = 1;

    for (let bit = 0; bit <= Math.pow(2, scaleRef.length); bit ++) {
      const currentScale = scaleRef.map((note, index) => {
        const currentBit = Math.pow(2, index);
        if (note === null) return null;
        return ((bit & currentBit) === currentBit ? note.twin() || note : note);
      });

      if (this.isAValidScale(currentScale)) {
        firstResults.push(currentScale);
      }
    }

    for (let scale of firstResults) {
      const firstNoteSame = (scale[0].name === scaleRef[0].name);
      let hasNoDuplicates = true;

      for (let index = 0; index < scale.length; index ++) {
        const note = scale[index];

        if (note === null) continue;

        const hasDuplicate = scale
          .some((currNote, currIndex) => currNote !== null && note.name === currNote.name && index !== currIndex);

        if (hasDuplicate) {
          hasNoDuplicates = false;
          break;
        }
      }

      if (firstNoteSame && hasNoDuplicates) {
        return scale;
      }
      else if (hasNoDuplicates) {
        lastResults.unshift(scale);
      }
      else if (firstNoteSame) {
        lastResults.push(scale);
      }
    }

    return lastResults[0];
  }

  isAValidScale(scale) {
    let index = 0;

    for (; index < scale.length; index ++) {
      const note = scale[index];

      if (note === null) continue;

      const hasInvalidAlts = scale
        .filter(currNote => currNote !== null)
        .some(currNote => (
          currNote.alt === FLAT && note.alt === SHARP ||
          currNote.alt === SHARP && note.alt === FLAT
        ));

      if (hasInvalidAlts) {
        return false;
      }
    }

    return true;
  }
}

export default Scale;
