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

  should_have_valid_mapping(): this {
    expect(Object.keys(this.repository.formulas)).toHaveLength(11)

    expect(this.repository.formulas).toHaveProperty('major')
    expect(this.repository.formulas).toHaveProperty('minor')
    expect(this.repository.formulas).toHaveProperty('minor-harmonic')
    expect(this.repository.formulas).toHaveProperty('minor-melodic')
    expect(this.repository.formulas).toHaveProperty('ionian')
    expect(this.repository.formulas).toHaveProperty('dorian')
    expect(this.repository.formulas).toHaveProperty('phrygian')
    expect(this.repository.formulas).toHaveProperty('lydian')
    expect(this.repository.formulas).toHaveProperty('mixolydian')
    expect(this.repository.formulas).toHaveProperty('aeolian')
    expect(this.repository.formulas).toHaveProperty('locrian')

    expect(this.repository.formulas['major']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['minor']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['minor-harmonic']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['minor-melodic']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['ionian']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['dorian']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['phrygian']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['lydian']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['mixolydian']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['aeolian']).toBeInstanceOf(Formula)
    expect(this.repository.formulas['locrian']).toBeInstanceOf(Formula)

    return this
  }

  should_get_$_formulas(count: number) {
    expect(this.formulas).toHaveLength(count)
  }
}

export default FormulaRepositoryThenStage
