import * as Note from './Note.class';
import { NoteEnum } from './Note.const';
import { AltEnum } from './Alt.const';

//TODO update next function to be recursive
export const getToneInstance = (note, alt) => {
	if (!note || !alt) {
		return null;
	}
	
	return Reflect.construct(Note[alt.charAt(0).toUpperCase() + alt.slice(1).toLowerCase() + note.toUpperCase()], []);
};

class Tone {
	constructor(note, alt) {
		this.note = note;
		this.alt  = alt;
	}
	
	toString() {
		return NoteEnum[this.note] + (this.alt !== 'NATURAL' ? AltEnum[this.alt] : '');
	}
}

export class FlatA extends Tone {
	constructor() {
		super('A', 'FLAT');
	}
	
	next(cursor = 0) {
		return cursor ? (new NaturalA).next(cursor - 1) : new NaturalA;
	}
	
	twin() {
		return new SharpG;
	}
}

export class NaturalA extends Tone {
	constructor() {
		super('A', 'NATURAL');
	}
	
	next(cursor = 0) {
		return cursor ? (new SharpA).next(cursor - 1) : new NaturalA;
	}
	
	twin() {
		return null;
	}
}

export class SharpA extends Tone {
	constructor() {
		super('A', 'SHARP');
	}
	
	next(cursor = 0) {
		return cursor ? (new NaturalB).next(cursor - 1) : new SharpA;
	}
	
	twin() {
		return new FlatB;
	}
}

export class FlatB extends Tone {
	constructor() {
		super('B', 'FLAT');
	}
	
	next(cursor = 0) {
		return cursor ? (new NaturalB).next(cursor - 1) : new FlatB;
	}
	
	twin() {
		return new SharpA;
	}
}

export class NaturalB extends Tone {
	constructor() {
		super('B', 'NATURAL');
	}
	
	next(cursor = 0) {
		return cursor ? (new NaturalC).next(cursor - 1) : new NaturalB;
	}
	
	twin() {
		return new FlatC;
	}
}

export class SharpB extends Tone {
	constructor() {
		super('B', 'SHARP');
	}
	
	next(cursor = 0) {
		return cursor ? (new SharpC).next(cursor - 1) : new SharpB;
	}
	
	twin() {
		return new NaturalC;
	}
}

export class FlatC extends Tone {
	constructor() {
		super('C', 'FLAT');
	}
	
	next(cursor = 0) {
		return cursor ? (new NaturalC).next(cursor - 1) : new FlatC;
	}
	
	twin() {
		return new NaturalB;
	}
}

export class NaturalC extends Tone {
	constructor() {
		super('C', 'NATURAL');
	}
	
	next(cursor = 0) {
		return cursor ? (new SharpC).next(cursor - 1) : new NaturalC;
	}
	
	twin() {
		return new SharpB;
	}
}

export class SharpC extends Tone {
	constructor() {
		super('C', 'SHARP');
	}
	
	next(cursor = 0) {
		return cursor ? (new NaturalD).next(cursor - 1) : new SharpC;
	}
	
	twin() {
		return new FlatD;
	}
}

export class FlatD extends Tone {
	constructor() {
		super('D', 'FLAT');
	}
	
	next(cursor = 0) {
		return cursor ? (new NaturalD).next(cursor - 1) : new FlatD;
	}
	
	twin() {
		return new SharpC;
	}
}

export class NaturalD extends Tone {
	constructor() {
		super('D', 'NATURAL');
	}
	
	next(cursor = 0) {
		return cursor ? (new SharpD).next(cursor - 1) : new NaturalD;
	}
	
	twin() {
		return null;
	}
}

export class SharpD extends Tone {
	constructor() {
		super('D', 'SHARP');
	}
	
	next(cursor = 0) {
		return cursor ? (new NaturalE).next(cursor - 1) : new SharpD;
	}
	
	twin() {
		return new FlatE;
	}
}

export class FlatE extends Tone {
	constructor() {
		super('E', 'FLAT');
	}
	
	next(cursor = 0) {
		return cursor ? (new NaturalE).next(cursor - 1) : new FlatE;
	}
	
	twin() {
		return new SharpD;
	}
}

export class NaturalE extends Tone {
	constructor() {
		super('E', 'NATURAL');
	}
	
	next(cursor = 0) {
		return cursor ? (new NaturalF).next(cursor - 1) : new NaturalE;
	}
	
	twin() {
		return new FlatF;
	}
}

export class SharpE extends Tone {
	constructor() {
		super('E', 'SHARP');
	}
	
	next(cursor = 0) {
		return cursor ? (new SharpF).next(cursor - 1) : new SharpE;
	}
	
	twin() {
		return new NaturalF;
	}
}

export class FlatF extends Tone {
	constructor() {
		super('F', 'FLAT');
	}
	
	next(cursor = 0) {
		return cursor ? (new NaturalF).next(cursor - 1) : new FlatF;
	}
	
	twin() {
		return new NaturalE;
	}
}

export class NaturalF extends Tone {
	constructor() {
		super('F', 'NATURAL');
	}
	
	next(cursor = 0) {
		return cursor ? (new SharpF).next(cursor - 1) : new NaturalF;
	}
	
	twin() {
		return new SharpE;
	}
}

export class SharpF extends Tone {
	constructor() {
		super('F', 'SHARP');
	}
	
	next(cursor = 0) {
		return cursor ? (new NaturalG).next(cursor - 1) : new SharpF;
	}
	
	twin() {
		return new FlatG;
	}
}

export class FlatG extends Tone {
	constructor() {
		super('G', 'FLAT');
	}
	
	next(cursor = 0) {
		return cursor ? (new NaturalG).next(cursor - 1) : new FlatG;
	}
	
	twin() {
		return new NaturalF;
	}
}

export class NaturalG extends Tone {
	constructor() {
		super('G', 'NATURAL');
	}
	
	next(cursor = 0) {
		return cursor ? (new SharpG).next(cursor - 1) : new NaturalG;
	}
	
	twin() {
		return null;
	}
}

export class SharpG extends Tone {
	constructor() {
		super('G', 'SHARP');
	}
	
	next(cursor = 0) {
		return cursor ? (new NaturalA).next(cursor - 1) : new SharpG;
	}
	
	twin() {
		return new FlatA;
	}
}
