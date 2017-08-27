// @flow

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

  should_have_valid_mapping(): this {
    expect(Object.keys(this.repository.formulas)).toHaveLength(11)

    expect(this.repository.formulas).toHaveProperty('Major')
    expect(this.repository.formulas).toHaveProperty('Minor')
    expect(this.repository.formulas).toHaveProperty('Minor harmonic')
    expect(this.repository.formulas).toHaveProperty('Minor melodic')
    expect(this.repository.formulas).toHaveProperty('Ionian')
    expect(this.repository.formulas).toHaveProperty('Dorian')
    expect(this.repository.formulas).toHaveProperty('Phrygian')
    expect(this.repository.formulas).toHaveProperty('Lydian')
    expect(this.repository.formulas).toHaveProperty('Mixolydian')
    expect(this.repository.formulas).toHaveProperty('Aeolian')
    expect(this.repository.formulas).toHaveProperty('Locrian')

    expect(this.repository.formulas['Major']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['Minor']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['Minor harmonic']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['Minor melodic']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['Ionian']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['Dorian']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['Phrygian']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['Lydian']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['Mixolydian']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['Aeolian']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['Locrian']).toBeInstanceOf(Formula)

    return this
  }

  should_have_$_formulas(count: number) {
    expect(this.formulas).toHaveLength(count)
  }

  should_have_name_$(expectedName: ?string) {
    if (!this.formula) {
      expect(expectedName).toBeNull()
    }

    else {
      expect(this.formula.name).toEqual(expectedName)
    }
  }
}

export default FormulaRepositoryThenStage
