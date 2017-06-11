// @flow

import Note from '../note/Note.class';
import noteRepository from '../note/Note.repository';
import {FORMULAS} from './Scale.const';

type ScaleParams = {
  tone: Note;
  formula?: number;
  intervals?: Array<number | null>;
  notes?: Note[];
}

class Scale {
  tone: Note;
  formula: ?number;
  intervals: ?Array<number | null>;
  notes: ?Note[];

  constructor(params: ScaleParams) {
    const {tone, formula, intervals, notes} = params;

    this.tone = tone;
    this.formula = formula;
    this.intervals = intervals;
    this.notes = notes;

    // if (! formula) {
    //   this.formula = this.buildFormula();
    // }

    // this.intervals = this.buildIntervals();

    // if (! notes) {
    //   this.notes = this.buildNotes();
    // }
  }

  buildFormula(): number {
    if (! this.intervals) {
      throw new Error('Intervals are required to init formula');
    }

    return this.intervals.reduce((formula, degree) => (
      degree === null ? formula : formula | Math.pow(2, degree)
    ), 0);
  }

  buildIntervals() {
    if (! this.formula) {
      throw new Error('Formula is required to init intervals');
    }

    let cursor = 0;
    let bit = 1

    const intervals = [];

    for (; bit < FORMULAS['chromatic']; bit = bit << 1, cursor ++) {
      intervals.push((this.formula & bit) === bit ? cursor : null);
    }

    return intervals;
  }

  buildNotes() {
    if (! this.intervals) {
      throw new Error('Intervals are required to init notes');
    }

    const notes = this.intervals.map((degree: ?number) => (
      degree === null ? null : noteRepository.getNext(this.tone, degree)
    ));

    return this.optimize(notes);
  }

  optimize(scaleRef: any[]) {
    const firstResults = [];
    const lastResults  = [];
    let cursor         = 1;

    for (let bit = 0; bit <= Math.pow(2, scaleRef.length); bit ++) {
      const currentScale = scaleRef.map((note, index): any => {
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

  isAValidScale(scale: any) {
    let index = 0;

    for (; index < scale.length; index ++) {
      const note = scale[index];

      if (note === null) continue;

      const hasInvalidAlts = scale
        .filter(currNote => currNote !== null)
        .some(currNote => (
          currNote.alt === 'flat' && note.alt === 'sharp' ||
          currNote.alt === 'sharp' && note.alt === 'flat'
        ));

      if (hasInvalidAlts) {
        return false;
      }
    }

    return true;
  }
}

export default Scale;

