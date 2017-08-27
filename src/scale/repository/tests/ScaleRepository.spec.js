// @flow

declare function describe(suiteMessage: string, suite: () => void): void
declare function it(testMessage: string, test: () => void | Promise<void>): void

import {
  parametrized2,
  parametrized3,
  scenario,
  scenarios,
  setupForRspec,
} from 'js-given'

import ScaleRepository from '../ScaleRepository'
import Given from './ScaleRepositoryStage.given'
import When from './ScaleRepositoryStage.when'
import Then from './ScaleRepositoryStage.then'

setupForRspec(describe, it)

const repository = new ScaleRepository

scenarios(
  'Scale repository',
  [Given, When, Then],
  ({ given, when, then }) => ({
    //
  })
)
