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
    }

    twin() {
        return new SharpG;
    }

    next() {
        return [new NaturalA];
    }
}

class NaturalA extends Note {
    constructor() {
        super(NoteEnum.A, AltEnum.NATURAL);
    }

    twin() {
        return null;
    }

    next() {
        return [new SharpA, new FlatB];
    }
}

class SharpA extends Note {
    constructor() {
        super(NoteEnum.A, AltEnum.SHARP);
    }

    twin() {
        return new FlatB;
    }

    next() {
        return [new NaturalB, new FlatC];
    }
}

class FlatB extends Note {
    constructor() {
        super(NoteEnum.B, AltEnum.FLAT);
    }

    twin() {
        return new SharpA;
    }

    next() {
        return [new NaturalB, new FlatC];
    }
}

class NaturalB extends Note {
    constructor() {
        super(NoteEnum.B, AltEnum.NATURAL);
    }

    twin() {
        return new FlatC;
    }

    next() {
        return [new SharpB, new NaturalC];
    }
}

class SharpB extends Note {
    constructor() {
        super(NoteEnum.B, AltEnum.SHARP);
    }

    twin() {
        return new NaturalC;
    }

    next() {
        return [new SharpC, new FlatD];
    }
}

class FlatC extends Note {
    constructor() {
        super(NoteEnum.C, AltEnum.FLAT);
    }

    twin() {
        return new NaturalB;
    }

    next() {
        return [new NaturalC];
    }
}

class NaturalC extends Note {
    constructor() {
        super(NoteEnum.C, AltEnum.NATURAL);
    }

    twin() {
        return SharpB;
    }

    next() {
        return [new SharpC, new FlatD];
    }
}

class SharpC extends Note {
    constructor() {
        super(NoteEnum.C, AltEnum.SHARP);
    }

    twin() {
        return FlatD;
    }

    next() {
        return [new NaturalD];
    }
}

class FlatD extends Note {
    constructor() {
        super(NoteEnum.D, AltEnum.FLAT);
    }

    twin() {
        return SharpC;
    }

    next() {
        return [new NaturalD];
    }
}

class NaturalD extends Note {
    constructor() {
        super(NoteEnum.D, AltEnum.NATURAL);
    }

    twin() {
        return null;
    }

    next() {
        return [new SharpD, new FlatE];
    }
}

class SharpD extends Note {
    constructor() {
        super(NoteEnum.D, AltEnum.SHARP);
    }

    twin() {
        return new FlatE;
    }

    next() {
        return [new NaturalE, new FlatF];
    }
}

class FlatE extends Note {
    constructor() {
        super(NoteEnum.E, AltEnum.FLAT);
    }

    twin() {
        return new SharpD;
    }

    next() {
        return [new NaturalE, new FlatF];
    }
}

class NaturalE extends Note {
    constructor() {
        super(NoteEnum.E, AltEnum.NATURAL);
    }

    twin() {
        return new FlatF;
    }

    next() {
        return [new SharpE, new NaturalF];
    }
}

class SharpE extends Note {
    constructor() {
        super(NoteEnum.E, AltEnum.SHARP);
    }

    twin() {
        return new NaturalF;
    }

    next() {
        return [new SharpF, new FlatG];
    }
}

class FlatF extends Note {
    constructor() {
        super(NoteEnum.F, AltEnum.FLAT);
    }

    twin() {
        return new NaturalE;
    }

    next() {
        return [new NaturalF];
    }
}

class NaturalF extends Note {
    constructor() {
        super(NoteEnum.F, AltEnum.NATURAL);
    }

    twin() {
        return new FlatG;
    }

    next() {
        return [new SharpF, new NaturalG];
    }
}

class SharpF extends Note {
    constructor() {
        super(NoteEnum.F, AltEnum.SHARP);
    }

    twin() {
        return new NaturalG;
    }

    next() {
        return [new SharpG, new FlatA];
    }
}

class FlatG extends Note {
    constructor() {
        super(NoteEnum.G, AltEnum.FLAT);
    }

    twin() {
        return new NaturalF;
    }

    next() {
        return [new NaturalG];
    }
}

class NaturalG extends Note {
    constructor() {
        super(NoteEnum.G, AltEnum.NATURAL);
    }

    twin() {
        return null;
    }

    next() {
        return [new SharpG, new FlatA];
    }
}

class SharpG extends Note {
    constructor() {
        super(NoteEnum.G, AltEnum.SHARP);
    }

    twin() {
        return new FlatA;
    }

    next() {
        return [new NaturalA];
    }
}
