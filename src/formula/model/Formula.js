// @flow

import {assign} from 'lodash'

type FormulaCategory
  = 'scale'
  | 'mode';

type FormulaParams = {
  id: number;
  name: string;
  category: FormulaCategory;
}

class Formula {
  id: number;
  name: string;
  category: FormulaCategory;

  constructor(params: FormulaParams) {
    return assign(this, params)
  }
}

export type {FormulaCategory}
export default Formula
