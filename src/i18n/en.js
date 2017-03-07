import * as Note from '../models/Note.const';
import * as Alt from '../models/Alt.const';
import * as Scale from '../models/Scale.const';

const i18n = {
	[Note.A]: 'A',
	[Note.B]: 'B',
	[Note.C]: 'C',
	[Note.D]: 'D',
	[Note.E]: 'E',
	[Note.F]: 'F',
	[Note.G]: 'G',
	
	[Alt.FLAT]   : '♭',
	[Alt.NATURAL]: '',
	[Alt.SHARP]  : '♯',
	
	[Scale.MAJOR]         : 'Major',
	[Scale.MINOR_NATURAL] : 'Minor natural',
	[Scale.MINOR_HARMONIC]: 'Minor harmonic',
	[Scale.MINOR_MELODIC] : 'Minor melodic',
};

const translate = key => i18n.hasOwnProperty(key) ? i18n[key] : key;

export default translate;
