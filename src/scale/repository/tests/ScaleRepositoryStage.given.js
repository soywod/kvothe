// @flow

import {
  State,
  Stage,
} from 'js-given'

import Note from '../../../note/model/Note'
import Formula from '../../../formula/model/Formula'

import Scale from '../../model/Scale'
import ScaleRepository from '../ScaleRepository'

class ScaleRepositoryGivenStage extends Stage {
  @State repository: ScaleRepository;
  @State note: Note;
  @State formula: Formula;

  a_scale_repository(repository: ScaleRepository): this {
    this.repository = repository
    return this
  }

  a_note(note: Note): this {
    this.note = note
    return this
  }

  a_formula(formula: Formula): this {
    this.formula = formula
    return this
  }
}

export default ScaleRepositoryGivenStage
