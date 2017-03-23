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

const formulas = {
  [ScaleConst.CHROMATIC]: P1 | m2 | M2 | m3 | M3 | P4 | d5 | P5 | m6 | M6 | m7 | M7,

  [ScaleConst.MAJOR]: P1 | M2 | M3 | P4 | P5 | M6 | M7,
  [ScaleConst.MINOR]: P1 | M2 | m3 | P4 | P5 | m6 | m7,

  [ScaleConst.DORIAN]    : P1 | M2 | m3 | P4 | P5 | M6 | m7,
  [ScaleConst.PHRYGIAN]  : P1 | m2 | m3 | P4 | P5 | m6 | m7,
  [ScaleConst.LYDIAN]    : P1 | M2 | M3 | A4 | P5 | M6 | M7,
  [ScaleConst.MIXOLYDIAN]: P1 | M2 | M3 | P4 | P5 | M6 | m7,
  [ScaleConst.LOCRIAN]   : P1 | m2 | m3 | P4 | d5 | m6 | m7,

  [ScaleConst.MINOR_HARMONIC]: P1 | M2 | m3 | P4 | P5 | m6 | M7,
  [ScaleConst.MINOR_MELODIC] : P1 | M2 | m3 | P4 | P5 | M6 | M7,
};

class Scale {
  static getInstance(params) {
    return new Scale(params)
  }

  getName() {
    return _.findKey(formula => this.formula === formula)(formulas);
  }

  constructor(params) {
    this.formula   = formulas[params.formula] || params.formula;
    this.intervals = params.intervals;
    this.note      = params.note;
    this.notes     = [];

    if (! this.formula && ! this.intervals) {
      throw new Error('Missing parameter: formula or intervals.');
    }

    if (! this.formula) {
      this.initFormula();
    }

    this.initIntervals();
    this.initNotes();
  }

  initIntervals() {
    let bit = 1, cursor = 0;

    this.intervals = [];

    for (; bit < formulas[ScaleConst.CHROMATIC]; bit = bit << 1, cursor ++) {
      if ((this.formula & bit) === bit) {
        this.intervals.push(cursor);
      }
    }

    this.lastDegree = cursor;
  }

  initFormula() {
    this.formula = _.reduce((formula, degree) => formula | Math.pow(2, degree))(0)(this.intervals);
  }

  initNotes() {
    this.notes = this.optimize(
      _.map(degree => this.note.next(degree))(this.intervals)
    );
  }

  buildAllModes() {
    return this.intervals.map(degree => {
      return Scale.getInstance({
        note     : this.note.next(degree),
        intervals: this.buildModeIntervals(degree)
      });
    });
  }

  buildModeIntervals(degreeRef) {
    return this.intervals
      .map(degree => Math.abs(degree - degreeRef + this.lastDegree) % this.lastDegree)
      .sort((a, b) => a > b);
  };

  buildMode(intervals, index) {
    const noteRef = this.note.next(this.intervals[index]);
    const scale   = _.map(degree => noteRef.next(degree))(intervals);

    return this.optimize(scale);
  }

  optimize(scaleRef) {
    const firstResults = [];
    const lastResults  = [];
    let cursor         = 1;

    for (let bit = 0; bit <= Math.pow(2, scaleRef.length); bit ++) {
      const currentScale = scaleRef.map((note, index) => {
        const currentBit = Math.pow(2, index);
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

        if (scale.some((currNote, currIndex) => index !== currIndex && note.name === currNote.name)) {
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
      const note           = scale[index];
      const hasInvalidAlts = scale.some((currNote, currIndex) => (
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
