import fs from 'fs';
import {
  paramsApplier as applyParams,
  sitemapBuilder as buildSitemap
} from 'react-router-sitemap';

import * as NoteNames from './src/const/NoteName';
import * as NoteAlts from './src/const/NoteAlt';
import { SCALES, MODES } from './src/const/Scale';

const hostname = 'https://kvothe.soywod.fr';
const noteName = Object.values(NoteNames);
const noteAlt  = Object.values(NoteAlts);
const formula  = [...SCALES, ...MODES];

const config = {
  '/harmonizer/:noteName/:noteAlt'         : [{ noteName, noteAlt }],
  '/harmonizer/:noteName/:noteAlt/:formula': [{ noteName, noteAlt, formula }],
};

const paths = ['/', '/harmonizer', ...Object.keys(config)];
const mergedPaths = applyParams(paths, config);
const sitemap = buildSitemap(hostname, mergedPaths);

fs.writeFileSync('./src/static/sitemap.xml', sitemap.toString());
