// @flow

import {forEach} from 'lodash'
import {
  State,
  Stage,
} from 'js-given'

import Formula from '../../model/Formula'
import type {FormulaCategory} from '../../model/Formula'
import FormulaRepository from '../FormulaRepository'

class FormulaRepositoryThenStage extends Stage {
  @State repository: FormulaRepository;
  @State category: FormulaCategory;

  @State formulas: Formula[];
  @State formula: ?Formula;
  @State slug: string;

  should_have_valid_mapping(): this {
    const {formulas} = this.repository

    expect(Object.keys(formulas)).toHaveLength(11)

    forEach([
      'Major',
      'Minor',
      'Minor harmonic',
      'Minor melodic',
      'Ionian',
      'Dorian',
      'Phrygian',
      'Lydian',
      'Mixolydian',
      'Aeolian',
      'Locrian',
    ], name => {
      expect(formulas).toHaveProperty(name)
      expect(formulas[name]).toBeInstanceOf(Formula)
    })

    return this
  }

  should_have_$_formulas(count: number) {
    expect(this.formulas).toHaveLength(count)
  }

  should_have_id_$(expectedId: ?string) {
    if (!this.formula) {
      expect(expectedId).toBeNull()
    }

    else {
      expect(this.formula.id).toEqual(expectedId)
    }
  }

  should_have_slug_$(expectedSlug: string) {
    expect(this.slug).toEqual(expectedSlug)
  }
}

export default FormulaRepositoryThenStage
