// @flow

import {forEach} from 'lodash';
import {
  State,
  Stage,
} from 'js-given'

import Scale from '../../model/Scale'
import ScaleRepository from '../ScaleRepository'

class ScaleRepositoryThenStage extends Stage {
  @State repository: ScaleRepository;
  @State scale: Scale;

  should_have_ids(expectedNoteIds: Array<?string>) {
    const noteIds = this.scale.intervals
      .map(note => note ? note.id : null)

    expect(noteIds).toHaveLength(expectedNoteIds.length)

    forEach(noteIds, (noteId: ?string, index: number) => {
      expect(noteId).toEqual(expectedNoteIds[index])
    })
  }
}

export default ScaleRepositoryThenStage

