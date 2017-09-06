// @flow

import {
  State,
  Stage,
} from 'js-given'

import Scale from '../../model/Scale'
import ScaleRepository from '../ScaleRepository'

class ScaleRepositoryWhenStage extends Stage {
  @State repository: ScaleRepository;
  @State formulaSlug: string;
  @State noteSlug: string;
  @State scale: Scale;

  get_scale_by_note_and_formula_slug() {
    this.scale = this.repository.getByNoteAndFormulaSlug(
      this.noteSlug,
      this.formulaSlug
    )
  }
}

export default ScaleRepositoryWhenStage
