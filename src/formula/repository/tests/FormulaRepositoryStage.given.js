// @flow

import {
  State,
  Stage,
} from 'js-given'

import Formula from '../../model/Formula'
import type {FormulaCategory} from '../../model/Formula'
import FormulaRepository from '../FormulaRepository'

class FormulaRepositoryGivenStage extends Stage {
  @State repository: FormulaRepository;
  @State category: FormulaCategory;

  a_formula_repository(repository: FormulaRepository): this {
    this.repository = repository
    return this
  }

  a_category(category: FormulaCategory): this {
    this.category = category
    return this
  }
}

export default FormulaRepositoryGivenStage
