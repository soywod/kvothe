// @flow

import {
  State,
  Stage,
} from 'js-given'

import Note from '../../../note/model/Note'
import Formula from '../../../formula/model/Formula'

import Scale from '../../model/Scale'
import ScaleRepository from '../ScaleRepository'

class ScaleRepositoryWhenStage extends Stage {
  @State repository: ScaleRepository;
  @State note: Note;
  @State formula: Formula;
  @State scale: Scale;

  get_scale_by_note_and_formula() {
    this.scale = this.repository.getByNoteAndFormula(
      this.note,
      this.formula,
    )
  }
}

export default ScaleRepositoryWhenStage
