// @flow

import {range} from 'lodash';

import Note from '../../note/model/Note';
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

  getByNoteSlugAndFormulaSlug(
    noteSlug: string,
    formulaSlug: string
  ): Array<?Note> {
    const tone = noteRepository.getBySlug(noteSlug)
    if (! tone) {
      throw new TypeError(`Note slug ${noteSlug} is invalid`)
    }

    const formula = formulaRepository.getBySlug(formulaSlug)
    if (! formula) {
      throw new TypeError(`Formula slug ${formulaSlug} is invalid`)
    }

    const positions = range(NB_POSITIONS)

    return positions.map((position: number) => {
      const note = noteRepository.getNext(tone, position)
      const value = Math.pow(2, position)
      const doesFormulaContainValue = ((formula.value & value) === value)

      return doesFormulaContainValue ? note : null
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
