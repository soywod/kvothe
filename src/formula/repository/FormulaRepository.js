// @flow

import _, {
  assign,
  capitalize,
  filter,
  find,
  forEach,
} from 'lodash'

import Formula from '../model/Formula'
import type {FormulaCategory} from '../model/Formula'

const P1 = 1
const m2 = P1 << 1
const M2 = P1 << 2
const m3 = P1 << 3
const M3 = P1 << 4
const P4 = P1 << 5
const A4 = P1 << 6
const d5 = P1 << 6
const P5 = P1 << 7
const m6 = P1 << 8
const M6 = P1 << 9
const m7 = P1 << 10
const M7 = P1 << 11

const scaleFormulaPresets = {
  'Major': P1 | M2 | M3 | P4 | P5 | M6 | M7,
  'Minor': P1 | M2 | m3 | P4 | P5 | m6 | m7,
  'Minor harmonic': P1 | M2 | m3 | P4 | P5 | m6 | M7,
  'Minor melodic': P1 | M2 | m3 | P4 | P5 | M6 | M7,
}

const modeFormulaPresets = {
  'Ionian': P1 | M2 | M3 | P4 | P5 | M6 | M7,
  'Dorian': P1 | M2 | m3 | P4 | P5 | M6 | m7,
  'Phrygian': P1 | m2 | m3 | P4 | P5 | m6 | m7,
  'Lydian': P1 | M2 | M3 | A4 | P5 | M6 | M7,
  'Mixolydian': P1 | M2 | M3 | P4 | P5 | M6 | m7,
  'Aeolian': P1 | M2 | m3 | P4 | P5 | m6 | m7,
  'Locrian': P1 | m2 | m3 | P4 | d5 | m6 | m7,
}

type FormulaMap = {
  [id: string]: Formula;
}

class FormulaRepository {
  static instance: FormulaRepository;
  formulas: FormulaMap;

  constructor() {
    if (FormulaRepository.instance) {
      return FormulaRepository.instance
    }

    const formulas = {}

    forEach(scaleFormulaPresets, (value, id) => {
      const params = {
        id,
        value,
        category: 'scale',
      }

      formulas[id] = new Formula(params)
    })

    forEach(modeFormulaPresets, (value, id) => {
      const params = {
        id,
        value,
        category: 'mode',
      }

      formulas[id] = new Formula(params)
    })

    this.formulas = assign(this.formulas, formulas)
    FormulaRepository.instance = this
  }

  getByCategory(category: FormulaCategory): Formula[] {
    return filter(
      this.formulas,
      f => f.category === category
    )
  }

  getById(id: string): ?Formula {
    return find(
      this.formulas,
      f => f.id === id
    )
  }

  getByValue(value: number): Formula {
    const formula = _(this.formulas)
      .filter(f => f.value === value)
      .sort(f => f.category === 'scale' ? -1 : 1)
      .first()

    return formula || new Formula({
      id: "",
      value,
      category: null,
    })
  }

  getBySlug(slug: string): ?Formula {
    const id = capitalize(
      slug.replace('-', ' ')
    )

    return this.getById(id)
  }

  getSlugById(id: string): string {
    return id
      .replace(' ', '-')
      .toLowerCase()
  }
}

export default FormulaRepository
