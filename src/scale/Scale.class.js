// @flow

import Note from '../note/Note.class';
import noteRepository from '../note/noteRepository';
import {FORMULAS} from './Scale.const';

type ScaleParams = {
  tone: Note;
  formula?: ?number;
  intervals?: ?Array<number | null>;
  notes?: ?Note[];
}

class Scale {
  tone: Note;
  formula: number;
  intervals: Array<number|null>;
  notes: Note[];

  constructor(params: ScaleParams) {
    const {tone, formula, intervals, notes} = params;

    this.tone = tone;

    if (formula) {
      this.formula = this.buildFormula(formula);
      this.intervals = this.buildIntervals(intervals);
    }
    else {
      this.intervals = this.buildIntervals(intervals);
      this.formula = this.buildFormula(formula);
    }

    this.notes = this.buildNotes(notes);
  }

  buildFormula(formula: ?number): number {
    if (formula) {
      return formula;
    }

    if (! this.intervals) {
      throw new Error('Intervals are required to build formula');
    }

    return this.intervals.reduce((newFormula, degree) => (
      degree === null ? newFormula : newFormula | Math.pow(2, degree)
    ), 0);
  }

  buildIntervals(intervals: ?Array<number|null>): Array<number|null> {
    if (intervals) {
      return intervals;
    }

    if (! this.formula) {
      throw new Error('Formula is required to build intervals');
    }

    let cursor = 0;
    let bit = 1

    const newIntervals = [];

    for (; bit < FORMULAS['chromatic']; bit = bit << 1, cursor ++) {
      newIntervals.push((this.formula & bit) === bit ? cursor : null);
    }

    return newIntervals;
  }

  buildNotes(notes: ?Note[]): Note[] {
    if (notes) {
      return notes;
    }

    if (! this.intervals) {
      throw new Error('Intervals are required to init notes');
    }

    const newNotes = this.intervals.map((degree: ?number) => (
      degree === null ? null : noteRepository.getNext(this.tone, degree)
    ));

    return this.optimize(newNotes);
  }

  // TODO: to simplify
  optimize(scaleRef: any[]) {
    const firstResults = [];
    const lastResults = [];
    let cursor = 1;

    for (let bit = 0; bit <= Math.pow(2, scaleRef.length); bit ++) {
      const currentScale = scaleRef.map((note, index): any => {
        if (note === null) return null;
        const currentBit = Math.pow(2, index);
        return ((bit & currentBit) === currentBit ? noteRepository.getTwin(note) || note : note);
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

