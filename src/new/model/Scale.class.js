import _ from 'lodash/fp';

import { MAJOR, MINOR_NATURAL } from '../const/Scale';
import { FLAT, SHARP } from '../const/NoteAlt';

const P1 = 1;
const m2 = P1 << 1;
const M2 = P1 << 2;
const m3 = P1 << 3;
const M3 = P1 << 4;
const P4 = P1 << 5;
const d5 = P1 << 6;
const P5 = P1 << 7;
const m6 = P1 << 8;
const M6 = P1 << 9;
const m7 = P1 << 10;
const M7 = P1 << 11;

const formulas = {
  [MAJOR]        : P1 | M2 | M3 | P4 | P5 | M6 | M7,
  [MINOR_NATURAL]: P1 | M2 | m3 | P4 | P5 | m6 | m7,
};

class Scale {
  constructor(note, scale) {
    this.note      = note;
    this.formula   = formulas[scale];
    this.intervals = [];

    let bit = 1, cursor = 0;

    for (; bit <= this.formula; bit = bit << 1, cursor++) {
      if ((this.formula & bit) === bit) {
        this.intervals.push(cursor);
      }
    }

    this.lastDegree = cursor;
  }

  buildAllModes() {
    return this.intervals
      .map(degree => this.buildModeInterval(degree))
      .map((intervals, index) => this.buildMode(intervals, index));
  }

  buildModeInterval(degreeRef) {
    return this.intervals
      .map(degree => Math.abs(degree - degreeRef + this.lastDegree) % this.lastDegree)
      .sort((a, b) => a > b);
  };

  buildMode(intervals, index) {
    const noteRef = this.note.next(this.intervals[index]);
    const scale   = _.map(degree => noteRef.next(degree))(intervals);

    return this.optimizeScale(scale);
  }

  optimizeScale(scaleRef) {
    const firstResults = [];
    const lastResults  = [];
    let cursor         = 1;

    for (let bit = 0; bit <= Math.pow(2, scaleRef.length); bit++) {
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

      for (let index = 0; index < scale.length; index++) {
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

    for (; index < scale.length; index++) {
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
