// @flow

import {assign, drop, take, forEach} from 'lodash';

import Note from '../../note/model/Note';
import Scale from '../model/Scale';

class ScaleRepository {
  static instance: ScaleRepository;

  constructor() {
    if (ScaleRepository.instance) {
      return ScaleRepository.instance
    }

    ScaleRepository.instance = this
  }

  getByFormula(tone: Note, formula: number): Scale {
    // return new Scale({ tone, formula });
  }
  // getFormulaByName(name: string): ?number {
  //   return FORMULAS[name] || null;
  // }


  // getScaleByName(tone: Note, name: string): ?Scale {
  //   const formula = this.getFormulaByName(name);
  //   if (! formula) return null;

  //   return this.getScaleByFormula(tone, formula);
  // }

  // getModesFromScale(scale: Scale): ?Array<Scale|null> {
  //   if (! scale.intervals) return null;

  //   return scale.intervals.map((degree, index) => {
  //     if (! degree && degree !== 0) return null;
  //     if (index === 0) return scale;

  //     const intervals = buildNextIntervals(scale, degree);
  //     const notes = buildNextNotes(scale, degree);
  //     const tone = notes && notes.length > 0
  //       ? notes[0]
  //       : noteRepository.getNext(scale.tone, degree);

  //     const params = {
  //       tone,
  //       intervals,
  //       notes,
  //     };

  //     return new Scale(params);
  //   })
  // }
}

// function buildNextIntervals(scale: Scale, offset: number): ?Array<number|null> {
//   const intervals = [
//     ...drop(scale.intervals, offset),
//     ...take(scale.intervals, offset),
//   ];

//   return intervals.map((index: ?number) => {
//     if (! index && index !== 0) {
//       return null;
//     }

//     if (! scale.intervals) {
//       return null;
//     }

//     const intervalsLength = scale.intervals.length;

//     return Math.abs(index - offset + intervalsLength) % intervalsLength;
//   });
// }

// function buildNextNotes(scale: Scale, offset: number): ?Note[] {
//   return [
//     ...drop(scale.notes, offset),
//     ...take(scale.notes, offset),
//   ];
// }

// const scaleRepository = new ScaleRepository;

export default ScaleRepository
