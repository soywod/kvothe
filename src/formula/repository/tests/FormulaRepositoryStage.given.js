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
  @State id: string;
  @State slug: string;

  a_formula_repository(repository: FormulaRepository): this {
    this.repository = repository
    return this
  }

  a_formula_category(category: FormulaCategory): this {
    this.category = category
    return this
  }

  a_formula_id(id: string): this {
    this.id = id
    return this
  }

  a_formula_slug(slug: string): this {
    this.slug = slug
    return this
  }
}

export default FormulaRepositoryGivenStage
