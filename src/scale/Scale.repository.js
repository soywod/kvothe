// @flow

import {forEach} from 'lodash';

import Scale from './Scale.class';
import {FORMULAS} from './Scale.const';
import Note from '../note/Note.class';

class ScaleRepository {
  getFormulaByName(name: string): ?number {
    return FORMULAS[name] || null;
  }

  getScaleByFormula(tone: Note, formula: number): Scale {
    return new Scale({tone, formula});
  }

  getScaleByName(tone: Note, name: string): ?Scale {
    const formula = this.getFormulaByName(name);
    if (! formula) return null;

    return this.getScaleByFormula(tone, formula);
  }
}

const scaleRepository = new ScaleRepository;

export default scaleRepository;

