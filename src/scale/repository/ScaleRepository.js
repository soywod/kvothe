// @flow

import _, {
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
    const rawIntervals = positions.map((position: number) => {
      const note = noteRepository.getNext(tone, position)
      const value = Math.pow(2, position)
      const doesFormulaContainValue = ((formula.value & value) === value)

      return doesFormulaContainValue ? note : null
    })

    const intervals = optimize(rawIntervals)

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
}

function optimize(intervalsRef: Array<?Note>): Array<?Note> {
  const maxCombinations = Math.pow(2, intervalsRef.length) + 1
  const allIntervals = range(maxCombinations)
    .reduce((allIntervals, intervals) => ([
      ...allIntervals,
      intervalsRef.map((note, index) => {
        if (! note) {
          return null
        }

        const noteToSwap = Math.pow(2, index);

        return ((intervals & noteToSwap) === noteToSwap
          ? noteRepository.getTwin(note) || note
          : note
        )
      })
    ]), [])
    .filter(byValidAlts)

  return findBestIntervals(allIntervals, intervalsRef)
}

function byValidAlts(scale: Array<?Note>): boolean {
  const scaleWithoutNulls = scale.filter(note => !! note)

  for (let index = 0; index < scale.length; index ++) {
    const noteRef = scale[index]

    if (! noteRef) {
      continue
    }

    const hasInvalidAlts = scaleWithoutNulls
      .some(note => note && (
        note.alt === '♭' && noteRef.alt === '♯' ||
        note.alt === '♯' && noteRef.alt === '♭'
      ))

    if (hasInvalidAlts) {
      return false;
    }
  }

  return true;
}

function findBestIntervals(
  allIntervals: Array<Array<?Note>>,
  intervalsRef: Array<?Note>
): Array<?Note> {
  let matchingIntervals = []

  for (let intervals of allIntervals) {
    let hasNoDuplicates = true;

    const hasFirstNoteSame = (
      intervals[0] &&
      intervalsRef[0] &&
      intervals[0].name === intervalsRef[0].name
    )

    for (let indexRef = 0; indexRef < intervals.length; indexRef ++) {
      const noteRef = intervals[indexRef]

      if (! noteRef) {
        continue
      }

      const hasDuplicates = intervals
        .some((note, index) => (!! note &&
          note.name === noteRef.name &&
          index !== indexRef
        ))

      if (hasDuplicates) {
        hasNoDuplicates = false;
        break;
      }
    }

    if (hasFirstNoteSame && hasNoDuplicates) {
      return intervals
    } else if (hasNoDuplicates) {
      matchingIntervals.unshift(intervals);
    } else if (hasFirstNoteSame) {
      matchingIntervals.push(intervals);
    }
  }

  return matchingIntervals[0] || []
}

export default ScaleRepository
