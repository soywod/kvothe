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

import type {NoteName, NoteAlt } from '../../model/Note'

import NoteRepository from '../NoteRepository'
import Given from './NoteRepositoryStage.given'
import When from './NoteRepositoryStage.when'
import Then from './NoteRepositoryStage.then'

setupForRspec(describe, it)

const repository = new NoteRepository

scenarios(
  'Note repository',
  [Given, When, Then],
  ({ given, when, then }) => ({
    should_init_notes_mapping: scenario({}, () => {
      given().a_note_repository(repository)
      then().should_have_valid_mapping()
    }),

    should_get_note_by_id: scenario({}, parametrized2([
      ['A♭', 'A♭'],
      ['B', 'B'],
      ['C♯', 'C♯'],
      ['bad', null],
    ], (
      currentNoteId: string,
      expectedNoteId: ?string
    ) => {
        given()
          .a_note_repository(repository).and()
          .a_note_id_$(currentNoteId)
        when().get_note_by_id()
        then().should_have_id_$(expectedNoteId)
      })),

    should_get_note_by_name_and_alt: scenario({}, parametrized3([
      ['A', '♭', 'A♭'],
      ['B', null, 'B'],
      ['C', '♯', 'C♯'],
    ], (
      currentNoteName: NoteName,
      currentNoteAlt: ?NoteAlt,
      expectedNoteId: string
    ) => {
        given()
          .a_note_repository(repository).and()
          .a_note_name_$(currentNoteName).and()
          .a_note_alt_$(currentNoteAlt)
        when().get_note_by_name_and_alt()
        then().should_have_id_$(expectedNoteId)
      })),

    should_get_next_note: scenario({}, parametrized2([
      ['A♭', 'A'], ['A', 'A♯'], ['A♯', 'B'],
      ['B♭', 'B'], ['B', 'B♯'], ['B♯', 'C♯'],
      ['C♭', 'C'], ['C', 'C♯'], ['C♯', 'D'],
      ['D♭', 'D'], ['D', 'D♯'], ['D♯', 'E'],
      ['E♭', 'E'], ['E', 'E♯'], ['E♯', 'F♯'],
      ['F♭', 'F'], ['F', 'F♯'], ['F♯', 'G'],
      ['G♭', 'G'], ['G', 'G♯'], ['G♯', 'A'],
      ['bad', null],
    ], (
      currentNoteId: string,
      expectedNextNoteId: ?string
    ) => {
      given()
        .a_note_repository(repository).and()
        .a_note_id_$(currentNoteId)
      when()
        .get_note_by_id().and()
        .get_next_note()
      then().should_have_next_id_$(expectedNextNoteId)
    })),

    should_get_twin_note: scenario({}, parametrized2([
      ['A♭', 'G♯'], ['A', null], ['A♯', 'B♭'],
      ['B♭', 'A♯'], ['B', 'C♭'], ['B♯', 'C'],
      ['C♭', 'B'], ['C', 'B♯'], ['C♯', 'D♭'],
      ['D♭', 'C♯'], ['D', null], ['D♯', 'E♭'],
      ['E♭', 'D♯'], ['E', 'F♭'], ['E♯', 'F'],
      ['F♭', 'E'], ['F', 'E♯'], ['F♯', 'G♭'],
      ['G♭', 'F♯'], ['G', null], ['G♯', 'A♭'],
      ['bad', null],
    ], (
      currentNoteId: string,
      expectedTwinNoteId: ?string
    ) => {
      given()
        .a_note_repository(repository).and()
        .a_note_id_$(currentNoteId)
      when()
        .get_note_by_id().and()
        .get_twin_note()
      then().should_have_twin_id_$(expectedTwinNoteId)
    })),

    should_get_note_position: scenario({}, parametrized2([
      ['A♭', 0], ['A', 1], ['A♯', 2],
      ['B♭', 2], ['B', 3], ['B♯', 4],
      ['C♭', 3], ['C', 4], ['C♯', 5],
      ['D♭', 5], ['D', 6], ['D♯', 7],
      ['E♭', 7], ['E', 8], ['E♯', 9],
      ['F♭', 8], ['F', 9], ['F♯', 10],
      ['G♭', 10], ['G', 11], ['G♯', 0],
      ['bad', null],
    ], (
      currentNoteId: string,
      expectedPosition: ?number
    ) => {
      given()
        .a_note_repository(repository).and()
        .a_note_id_$(currentNoteId)
      when()
        .get_note_by_id().and()
        .get_note_position()
      then().should_have_position_$(expectedPosition)
    })),

    should_get_slug: scenario({}, parametrized2([
      ['A♭', 'a-flat'], ['A', 'a'], ['A♯', 'a-sharp'],
      ['B♭', 'b-flat'], ['B', 'b'], ['B♯', 'b-sharp'],
      ['C♭', 'c-flat'], ['C', 'c'], ['C♯', 'c-sharp'],
      ['D♭', 'd-flat'], ['D', 'd'], ['D♯', 'd-sharp'],
      ['E♭', 'e-flat'], ['E', 'e'], ['E♯', 'e-sharp'],
      ['F♭', 'f-flat'], ['F', 'f'], ['F♯', 'f-sharp'],
      ['G♭', 'g-flat'], ['G', 'g'], ['G♯', 'g-sharp'],
      ['bad', 'bad'],
    ], (
      currentNoteId: string,
      expectedNoteSlug: string
    ) => {
      given()
        .a_note_repository(repository).and()
        .a_note_id_$(currentNoteId)
      when().get_slug_by_id()
      then().should_have_slug_$(expectedNoteSlug)
    })),

    should_get_note_by_slug: scenario({}, parametrized2([
      ['a-flat', 'A♭'], ['a', 'A'], ['a-sharp', 'A♯'],
      ['b-flat', 'B♭'], ['b', 'B'], ['b-sharp', 'B♯'],
      ['c-flat', 'C♭'], ['c', 'C'], ['c-sharp', 'C♯'],
      ['d-flat', 'D♭'], ['d', 'D'], ['d-sharp', 'D♯'],
      ['e-flat', 'E♭'], ['e', 'E'], ['e-sharp', 'E♯'],
      ['f-flat', 'F♭'], ['f', 'F'], ['f-sharp', 'F♯'],
      ['g-flat', 'G♭'], ['g', 'G'], ['g-sharp', 'G♯'],
      ['bad', null],
    ], (
      currentNoteSlug: string,
      expecteNoteId: ?string
    ) => {
      given()
        .a_note_repository(repository).and()
        .a_note_slug_$(currentNoteSlug)
      when().get_note_by_slug()
      then().should_have_id_$(expecteNoteId)
    })),
  })
)
