// @flow

import {
  State,
  Stage,
} from 'js-given'

import Scale from '../../model/Scale'
import ScaleRepository from '../ScaleRepository'

class ScaleRepositoryWhenStage extends Stage {
  @State repository: ScaleRepository;
}

export default ScaleRepositoryWhenStage
