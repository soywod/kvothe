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

import ScaleRepository from '../ScaleRepository'
import Given from './ScaleRepositoryStage.given'
import When from './ScaleRepositoryStage.when'
import Then from './ScaleRepositoryStage.then'

setupForRspec(describe, it)

const repository = new ScaleRepository

scenarios(
  'Scale repository',
  [Given, When, Then],
  ({ given, when, then }) => ({
    should_get_scale_by_formula_and_note_slug: scenario({}, parametrized3([
      ['c', 'major', ['C', null, 'D', null, 'E', 'F', null, 'G', null, 'A', null, 'B']],
    ], (
      noteSlug: string,
      formulaSlug: string,
      expectedNoteIds: Array<?string>,
    ) => {
      given()
        .a_scale_repository(repository).and()
        .a_note_slug_$(noteSlug).and()
        .a_formula_slug_$(formulaSlug)
      when().get_scale_by_note_and_formula_slug()
      then().should_have_ids(expectedNoteIds)
    })),
  })
)
