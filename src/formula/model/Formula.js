// @flow

import {assign} from 'lodash'

type FormulaCategory
  = 'scale'
  | 'mode';

type FormulaParams = {
  id: string;
  value: number;
  category: FormulaCategory;
}

class Formula {
  id: string;
  value: number;
  category: FormulaCategory;

  constructor(params: FormulaParams) {
    return assign(this, params)
  }
}

export type {FormulaCategory}
export default Formula
