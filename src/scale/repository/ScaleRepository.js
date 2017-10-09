// @flow

import {
  drop,
  first,
  range,
  take,
} from 'lodash';

import Note from '../../note/model/Note';
import Formula from '../../formula/model/Formula';
import NoteRepository from '../../note/repository/NoteRepository'
import FormulaRepository from '../../formula/repository/FormulaRepository'
import Scale from '../model/Scale';

import {NB_POSITIONS} from '../../note/repository/NoteRepository'

const noteRepository = new NoteRepository
const formulaRepository = new FormulaRepository

class ScaleRepository {
  static instance: ScaleRepository;

  constructor() {
    if (ScaleRepository.instance) {
      return ScaleRepository.instance
    }

    ScaleRepository.instance = this
  }

  getByNoteAndFormula(
    tone: Note,
    formula: Formula,
  ): Scale {
    const positions = range(NB_POSITIONS)
    const intervals = positions.map((position: number) => {
      const note = noteRepository.getNext(tone, position)
      const value = Math.pow(2, position)
      const doesFormulaContainValue = ((formula.value & value) === value)

      return doesFormulaContainValue ? note : null
    })

    // TODO: optimize intervals

    return new Scale({tone, formula, intervals})
  }

  getModesByScale(scale: Scale): Array<?Scale> {
    return scale.intervals.map((note: ?Note, offset: number) => {
      if (! note) {
        return null
      }

      if (offset === 0) {
        return scale
      }

      const intervals: Array<?Note> = [
        ...drop(scale.intervals, offset),
        ...take(scale.intervals, offset),
      ]

      const formula = formulaRepository.getByValue(
        intervals.reduce((value, note, index) => (
          note ? value | (1 << index) : value
        ), 1)
      )

      const tone = first(intervals)
      if (! tone) {
        throw new TypeError("First note of intervals can't be null")
      }

      return new Scale({tone, formula, intervals})
    })
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
