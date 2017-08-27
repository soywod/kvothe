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
  @State name: string;

  @State formulas: Formula[];
  @State formula: ?Formula;
  @State slug: string;

  get_by_category() {
    this.formulas = this.repository.getByCategory(this.category)
    return this
  }

  get_by_name() {
    this.formula = this.repository.getByName(this.name)
    return this
  }

  get_slug_by_name() {
    this.slug = this.repository.getSlugByName(this.name)
    return this
  }
}

export default FormulaRepositoryWhenStage
