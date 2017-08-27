// @flow

declare function describe(suiteMessage: string, suite: () => void): void
declare function it(testMessage: string, test: () => void | Promise<void>): void

import {
  parametrized2,
  parametrized3,
  scenario,
  scenarios,
  setupForRspec,
} from 'js-given'

import Formula from '../../model/Formula'
import type {FormulaCategory} from '../../model/Formula'
import FormulaRepository from '../FormulaRepository'
import Given from './FormulaRepositoryStage.given'
import When from './FormulaRepositoryStage.when'
import Then from './FormulaRepositoryStage.then'

setupForRspec(describe, it)

const repository = new FormulaRepository

scenarios(
  'Formula repository',
  [Given, When, Then],
  ({ given, when, then }) => ({
    should_init_formulas_mapping: scenario({}, () => {
      given().a_formula_repository(repository)
      then().should_have_valid_mapping()
    }),

    should_get_by_category: scenario({}, parametrized2([
      ['scale', 4],
      ['mode', 7],
      ['bad', 0], // $FlowFixMe
    ], (category: FormulaCategory, count: number) => {
      given()
        .a_formula_repository(repository).and()
        .a_category(category)
      when().get_by_category()
      then().should_have_$_formulas(count)
    })),

    should_get_by_name: scenario({}, parametrized2([
      ['Major', 'Major'],
      ['Minor harmonic', 'Minor harmonic'],
      ['Dorian', 'Dorian'],
      ['Aeolian', 'Aeolian'],
      ['bad', null],
    ], (name: string, expectedName: ?string) => {
      given()
        .a_formula_repository(repository).and()
        .a_name(name)
      when().get_by_name()
      then().should_have_name_$(expectedName)
    })),
  })
)
