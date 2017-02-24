import NoteEnum from './Note.enum';
import AltEnum from './Alt.enum';

class Note {
    constructor(key, alt) {
        this.key = key;
        this.alt = alt;
    }

    toString() {
        return this.key + (this.alt !== AltEnum.SHARP ? this.alt : '');
    }
}

class FlatA extends Note {
    constructor() {
        super(NoteEnum.A, AltEnum.FLAT);

        this.keySignature = [new FlatB, new FlatE, new FlatA, new FlatD];
        this.next = [new NaturalA];
        this.relativeMinor = new NaturalF;
        this.twin = new SharpG;
    }
}

class NaturalA extends Note {
    constructor() {
        super(NoteEnum.A, AltEnum.NATURAL);

        this.keySignature = [new SharpF, new SharpC, new SharpG];
        this.next = [new SharpA, new FlatB];
        this.relativeMinor = new SharpF;
        this.twin = null;
    }
}

class SharpA extends Note {
    constructor() {
        super(NoteEnum.A, AltEnum.SHARP);

        this.keySignature = null;
        this.next = [new NaturalB, new FlatC];
        this.relativeMinor = null;
        this.twin = new FlatB;
    }
}

class FlatB extends Note {
    constructor() {
        super(NoteEnum.B, AltEnum.FLAT);

        this.keySignature = [new FlatB, new FlatE];
        this.next = [new NaturalB, new FlatC];
        this.relativeMinor = new NaturalG;
        this.twin = new SharpA;
    }
}

class NaturalB extends Note {
    constructor() {
        super(NoteEnum.B, AltEnum.NATURAL);

        this.keySignature = [new SharpF, new SharpC, new SharpG, new SharpD, new SharpA];
        this.next = [new SharpB, new NaturalC];
        this.relativeMinor = new SharpG;
        this.twin = new FlatC;
    }
}

class SharpB extends Note {
    constructor() {
        super(NoteEnum.B, AltEnum.SHARP);

        this.keySignature = null;
        this.next = [new SharpC, new FlatD];
        this.relativeMinor = null;
        this.twin = new NaturalC;
    }
}

class FlatC extends Note {
    constructor() {
        super(NoteEnum.C, AltEnum.FLAT);

        this.keySignature = [new FlatB, new FlatE, new FlatA, new FlatD, new FlatG, new FlatC, new FlatF];
        this.next = [new NaturalC];
        this.relativeMinor = new FlatA;
        this.twin = new NaturalB;
    }
}

class NaturalC extends Note {
    constructor() {
        super(NoteEnum.C, AltEnum.NATURAL);

        this.keySignature = [];
        this.next = [new SharpC, new FlatD];
        this.relativeMinor = new NaturalA;
        this.twin = SharpB;
    }
}

class SharpC extends Note {
    constructor() {
        super(NoteEnum.C, AltEnum.SHARP);

        this.keySignature = [new SharpF, new SharpC, new SharpG, new SharpD, new SharpA, new SharpE, new SharpB];
        this.next = [new NaturalD];
        this.relativeMinor = new SharpA;
        this.twin = FlatD;
    }
}

class FlatD extends Note {
    constructor() {
        super(NoteEnum.D, AltEnum.FLAT);

        this.keySignature = [new FlatB, new FlatE, new FlatA, new FlatD, new FlatG];
        this.next = new FlatB;
        this.relativeMinor = [new NaturalD];
        this.twin = SharpC;
    }
}

class NaturalD extends Note {
    constructor() {
        super(NoteEnum.D, AltEnum.NATURAL);

        this.keySignature = [new SharpF, new SharpC];
        this.next = [new SharpD, new FlatE];
        this.relativeMinor = new NaturalB;
        this.twin = null;
    }
}

class SharpD extends Note {
    constructor() {
        super(NoteEnum.D, AltEnum.SHARP);

        this.keySignature = null;
        this.next = [new NaturalE, new FlatF];
        this.relativeMinor = null;
        this.twin = new FlatE;
    }
}

class FlatE extends Note {
    constructor() {
        super(NoteEnum.E, AltEnum.FLAT);

        this.keySignature = [new FlatB, new FlatE, new FlatA];
        this.next = [new NaturalE, new FlatF];
        this.relativeMinor = new NaturalC;
        this.twin = new SharpD;
    }
}

class NaturalE extends Note {
    constructor() {
        super(NoteEnum.E, AltEnum.NATURAL);

        this.keySignature = [new SharpF, new SharpC, new SharpG, new SharpD];
        this.next = [new SharpE, new NaturalF];
        this.relativeMinor = new SharpC;
        this.twin = new FlatF;
    }
}

class SharpE extends Note {
    constructor() {
        super(NoteEnum.E, AltEnum.SHARP);

        this.keySignature = null;
        this.next = [new SharpF, new FlatG];
        this.relativeMinor = null;
        this.twin = new NaturalF;
    }
}

class FlatF extends Note {
    constructor() {
        super(NoteEnum.F, AltEnum.FLAT);

        this.keySignature = null;
        this.next = [new NaturalF];
        this.relativeMinor = null;
        this.twin = new NaturalE;
    }
}

class NaturalF extends Note {
    constructor() {
        super(NoteEnum.F, AltEnum.NATURAL);

        this.keySignature = [new FlatB];
        this.next = [new SharpF, new NaturalG];
        this.relativeMinor = new NaturalD;
        this.twin = new FlatG;
    }
}

class SharpF extends Note {
    constructor() {
        super(NoteEnum.F, AltEnum.SHARP);

        this.keySignature = [new SharpF, new SharpC, new SharpG, new SharpD, new SharpA, new SharpE];
        this.next = [new SharpG, new FlatA];
        this.relativeMinor = new SharpD;
        this.twin = new NaturalG;
    }
}

class FlatG extends Note {
    constructor() {
        super(NoteEnum.G, AltEnum.FLAT);

        this.keySignature = [new FlatB, new FlatE, new FlatA, new FlatD, new FlatG, new FlatC];
        this.next = [new NaturalG];
        this.relativeMinor = new FlatE;
        this.twin = new NaturalF;
    }
}

class NaturalG extends Note {
    constructor() {
        super(NoteEnum.G, AltEnum.NATURAL);

        this.keySignature = [new SharpF];
        this.next = [new SharpG, new FlatA];
        this.relativeMinor = new NaturalE;
        this.twin = null;
    }
}

class SharpG extends Note {
    constructor() {
        super(NoteEnum.G, AltEnum.SHARP);

        this.keySignature = null;
        this.next = [new NaturalA];
        this.relativeMinor = null;
        this.twin = new FlatA;
    }
}
