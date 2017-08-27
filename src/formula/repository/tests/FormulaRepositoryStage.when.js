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
  @State id: string;

  @State formulas: Formula[];
  @State formula: ?Formula;
  @State slug: string;

  get_by_category() {
    this.formulas = this.repository.getByCategory(this.category)
    return this
  }

  get_by_id() {
    this.formula = this.repository.getById(this.id)
    return this
  }

  get_slug_by_id() {
    this.slug = this.repository.getSlugById(this.id)
    return this
  }
}

export default FormulaRepositoryWhenStage
