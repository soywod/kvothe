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

import Note from '../../../note/model/Note'
import Formula from '../../../formula/model/Formula'

import NoteRepository from '../../../note/repository/NoteRepository'
import FormulaRepository from '../../../formula/repository/FormulaRepository'
import ScaleRepository from '../ScaleRepository'
import Given from './ScaleRepositoryStage.given'
import When from './ScaleRepositoryStage.when'
import Then from './ScaleRepositoryStage.then'

setupForRspec(describe, it)

const noteRepository = new NoteRepository
const formulaRepository = new FormulaRepository
const scaleRepository = new ScaleRepository

const C = noteRepository.getById('C')
const Major = formulaRepository.getById('Major')

scenarios(
  'Scale repository',
  [Given, When, Then],
  ({ given, when, then }) => ({
    should_get_scale_by_formula_and_note: scenario({}, parametrized3([
      [C, Major, ['C', null, 'D', null, 'E', 'F', null, 'G', null, 'A', null, 'B']],
    ], (
      note: ?Note,
      formula: ?Formula,
      expectedNoteIds: Array<?string>,
    ) => {
      given()
        .a_scale_repository(scaleRepository).and()
        .a_note(note).and()
        .a_formula(formula)
      when().get_scale_by_note_and_formula()
      then().should_have_ids(expectedNoteIds)
    })),
  })
)
