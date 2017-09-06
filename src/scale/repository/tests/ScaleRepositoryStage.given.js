// @flow

import {
  State,
  Stage,
} from 'js-given'

import Scale from '../../model/Scale'
import ScaleRepository from '../ScaleRepository'

class ScaleRepositoryGivenStage extends Stage {
  @State repository: ScaleRepository;
  @State formulaSlug: string;
  @State noteSlug: string;

  a_scale_repository(repository: ScaleRepository): this {
    this.repository = repository
    return this
  }

  a_formula_slug_$(formulaSlug: string): this {
    this.formulaSlug = formulaSlug
    return this
  }

  a_note_slug_$(noteSlug: string): this {
    this.noteSlug = noteSlug
    return this
  }
}

export default ScaleRepositoryGivenStage
