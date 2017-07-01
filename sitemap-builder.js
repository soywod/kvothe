// @flow

import fs from 'fs';
import {
  paramsApplier as applyParams,
  sitemapBuilder as buildSitemap
} from 'react-router-sitemap';

import { SCALES, MODES } from './src/scale/Scale.const';
import noteRepository from './src/note/repository/NoteRepository';

noteRepository.init();

const hostname = 'https://kvothe.soywod.fr';
const noteId = Object.keys(noteRepository.notes);
const formula  = [...SCALES, ...MODES];

const config = {
  '/scale-harmonizer/:noteId': [{ noteId }],
  '/scale-harmonizer/:noteId/:formula': [{ noteId, formula }],
};

const paths = ['/', '/harmonizer', ...Object.keys(config)];
const mergedPaths = applyParams(paths, config);
const sitemap = buildSitemap(hostname, mergedPaths);

fs.writeFileSync('./src/static/sitemap.xml', sitemap.toString());

