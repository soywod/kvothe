// @flow

import {
  State,
  Stage,
} from 'js-given'

import Scale from '../../model/Scale'
import ScaleRepository from '../ScaleRepository'

class ScaleRepositoryGivenStage extends Stage {
  @State repository: ScaleRepository;

  a_scale_repository(repository: ScaleRepository): this {
    this.repository = repository
    return this
  }
}

export default ScaleRepositoryGivenStage
