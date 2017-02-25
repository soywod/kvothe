import * as Note from './Note.class';
import { NoteEnum } from './Note.enum';
import { AltEnum } from './Alt.enum';

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

    keySignature() {
        return [new FlatB, new FlatE, new FlatA, new FlatD];
    }

    next() {
        return new NaturalA;
    }

    relativeMinor() {
        return new NaturalF;
    }

    twin() {
        return new SharpG;
    }
}

export class NaturalA extends Tone {
    constructor() {
        super('A', 'NATURAL');
    }

    keySignature() {
        return [new SharpF, new SharpC, new SharpG];
    }

    next() {
        return new SharpA;
    }

    relativeMinor() {
        return new SharpF;
    }

    twin() {
        return null;
    }
}

export class SharpA extends Tone {
    constructor() {
        super('A', 'SHARP');
    }

    keySignature() {
        return this.twin().keySignature();
    }

    next() {
        return new NaturalB;
    }

    relativeMinor() {
        return this.twin().relativeMinor();
    }

    twin() {
        return new FlatB;
    }
}

export class FlatB extends Tone {
    constructor() {
        super('B', 'FLAT');
    }

    keySignature() {
        return [new FlatB, new FlatE];
    }

    next() {
        return new NaturalB;
    }

    relativeMinor() {
        return new NaturalG;
    }

    twin() {
        return new SharpA;
    }
}

export class NaturalB extends Tone {
    constructor() {
        super('B', 'NATURAL');
    }

    keySignature() {
        return [new SharpF, new SharpC, new SharpG, new SharpD, new SharpA];
    }

    next() {
        return new SharpB;
    }

    relativeMinor() {
        return new SharpG;
    }

    twin() {
        return new FlatC;
    }
}

export class SharpB extends Tone {
    constructor() {
        super('B', 'SHARP');
    }

    keySignature() {
        return this.twin().keySignature();
    }

    next() {
        return new SharpC;
    }

    relativeMinor() {
        return this.twin().relativeMinor();
    }

    twin() {
        return new NaturalC;
    }
}

export class FlatC extends Tone {
    constructor() {
        super('C', 'FLAT');
    }

    keySignature() {
        return [new FlatB, new FlatE, new FlatA, new FlatD, new FlatG, new FlatC, new FlatF];
    }

    next() {
        return new NaturalC;
    }

    relativeMinor() {
        return new FlatA;
    }

    twin() {
        return new NaturalB;
    }
}

export class NaturalC extends Tone {
    constructor() {
        super('C', 'NATURAL');
    }

    keySignature() {
        return [];
    }

    next() {
        return new SharpC;
    }

    relativeMinor() {
        return new NaturalA;
    }

    twin() {
        return new SharpB;
    }
}

export class SharpC extends Tone {
    constructor() {
        super('C', 'SHARP');
    }

    keySignature() {
        return [new SharpF, new SharpC, new SharpG, new SharpD, new SharpA, new SharpE, new SharpB];
    }

    next() {
        return new NaturalD;
    }

    relativeMinor() {
        return new SharpA;
    }

    twin() {
        return new FlatD;
    }
}

export class FlatD extends Tone {
    constructor() {
        super('D', 'FLAT');
    }

    keySignature() {
        return [new FlatB, new FlatE, new FlatA, new FlatD, new FlatG];
    }

    next() {
        return new NaturalD;
    }

    relativeMinor() {
        return new FlatB;
    }

    twin() {
        return new SharpC;
    }
}

export class NaturalD extends Tone {
    constructor() {
        super('D', 'NATURAL');
    }

    keySignature() {
        return [new SharpF, new SharpC];
    }

    next() {
        return new SharpD;
    }

    relativeMinor() {
        return new NaturalB;
    }

    twin() {
        return null;
    }
}

export class SharpD extends Tone {
    constructor() {
        super('D', 'SHARP');
    }

    keySignature() {
        return this.twin().keySignature();
    }

    next() {
        return new NaturalE;
    }

    relativeMinor() {
        return this.twin().relativeMinor();
    }

    twin() {
        return new FlatE;
    }
}

export class FlatE extends Tone {
    constructor() {
        super('E', 'FLAT');
    }

    keySignature() {
        return [new FlatB, new FlatE, new FlatA];
    }

    next() {
        return new NaturalE;
    }

    relativeMinor() {
        return new NaturalC;
    }

    twin() {
        return new SharpD;
    }
}

export class NaturalE extends Tone {
    constructor() {
        super('E', 'NATURAL');
    }

    keySignature() {
        return [new SharpF, new SharpC, new SharpG, new SharpD];
    }

    next() {
        return new SharpE;
    }

    relativeMinor() {
        return new SharpC;
    }

    twin() {
        return new FlatF;
    }
}

export class SharpE extends Tone {
    constructor() {
        super('E', 'SHARP');
    }

    keySignature() {
        return this.twin().keySignature();
    }

    next() {
        return new SharpF;
    }

    relativeMinor() {
        return this.twin().relativeMinor();
    }

    twin() {
        return new NaturalF;
    }
}

export class FlatF extends Tone {
    constructor() {
        super('F', 'FLAT');
    }

    keySignature() {
        return this.twin().keySignature();
    }

    next() {
        return new NaturalF;
    }

    relativeMinor() {
        return this.twin().relativeMinor();
    }

    twin() {
        return new NaturalE;
    }
}

export class NaturalF extends Tone {
    constructor() {
        super('F', 'NATURAL');
    }

    keySignature() {
        return [new FlatB];
    }

    next() {
        return new SharpF;
    }

    relativeMinor() {
        return new NaturalD;
    }

    twin() {
        return new SharpE;
    }
}

export class SharpF extends Tone {
    constructor() {
        super('F', 'SHARP');
    }

    keySignature() {
        return [new SharpF, new SharpC, new SharpG, new SharpD, new SharpA, new SharpE];
    }

    next() {
        return new NaturalG;
    }

    relativeMinor() {
        return new SharpD;
    }

    twin() {
        return new FlatG;
    }
}

export class FlatG extends Tone {
    constructor() {
        super('G', 'FLAT');
    }

    keySignature() {
        return [new FlatB, new FlatE, new FlatA, new FlatD, new FlatG, new FlatC];
    }

    next() {
        return new NaturalG;
    }

    relativeMinor() {
        return new FlatE;
    }

    twin() {
        return new NaturalF;
    }
}

export class NaturalG extends Tone {
    constructor() {
        super('G', 'NATURAL');
    }

    keySignature() {
        return [new SharpF];
    }

    next() {
        return new SharpG;
    }

    relativeMinor() {
        return new NaturalE;
    }

    twin() {
        return null;
    }
}

export class SharpG extends Tone {
    constructor() {
        super('G', 'SHARP');
    }

    keySignature() {
        return this.twin().keySignature();
    }

    next() {
        return new NaturalA;
    }

    relativeMinor() {
        return this.twin().relativeMinor();
    }

    twin() {
        return new FlatA;
    }
}
