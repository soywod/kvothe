// @flow

import {
  State,
  Stage,
} from 'js-given'

import Formula from '../../model/Formula'
import type {FormulaCategory} from '../../model/Formula'
import FormulaRepository from '../FormulaRepository'

class FormulaRepositoryWhenStage extends Stage {
  @State repository: FormulaRepository;
  @State category: FormulaCategory;
  @State formulas: Formula[];

  get_by_category() {
    this.formulas = this.repository.getByCategory(this.category)
    return this
  }
}

export default FormulaRepositoryWhenStage
