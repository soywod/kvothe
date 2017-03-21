import * as Self from './Note.class';

import { A, B, C, D, E, F, G } from '../const/NoteName';
import { FLAT, NATURAL, SHARP } from '../const/NoteAlt';

export default class Note {
  constructor(name, alt) {
    this.name = name;
    this.alt  = alt;
  }

  static getInstance(name, alt) {
    return Reflect.construct(
      Self[alt.charAt(0).toUpperCase() + alt.slice(1) + name.toUpperCase()],
      []
    );
  }
}

export class FlatA extends Note {
  constructor() {
    super(A, FLAT);
  }

  next(cursor = 0) {
    return cursor ? (new NaturalA).next(cursor - 1) : new FlatA;
  }

  twin() {
    return new SharpG;
  }
}

export class NaturalA extends Note {
  constructor() {
    super(A, NATURAL);
  }

  next(cursor = 0) {
    return cursor ? (new SharpA).next(cursor - 1) : new NaturalA;
  }

  twin() {
    return null;
  }
}

export class SharpA extends Note {
  constructor() {
    super(A, SHARP);
  }

  next(cursor = 0) {
    return cursor ? (new NaturalB).next(cursor - 1) : new SharpA;
  }

  twin() {
    return new FlatB;
  }
}

export class FlatB extends Note {
  constructor() {
    super(B, FLAT);
  }

  next(cursor = 0) {
    return cursor ? (new NaturalB).next(cursor - 1) : new FlatB;
  }

  twin() {
    return new SharpA;
  }
}

export class NaturalB extends Note {
  constructor() {
    super(B, NATURAL);
  }

  next(cursor = 0) {
    return cursor ? (new NaturalC).next(cursor - 1) : new NaturalB;
  }

  twin() {
    return new FlatC;
  }
}

export class SharpB extends Note {
  constructor() {
    super(B, SHARP);
  }

  next(cursor = 0) {
    return cursor ? (new SharpC).next(cursor - 1) : new SharpB;
  }

  twin() {
    return new NaturalC;
  }
}

export class FlatC extends Note {
  constructor() {
    super(C, FLAT);
  }

  next(cursor = 0) {
    return cursor ? (new NaturalC).next(cursor - 1) : new FlatC;
  }

  twin() {
    return new NaturalB;
  }
}

export class NaturalC extends Note {
  constructor() {
    super(C, NATURAL);
  }

  next(cursor = 0) {
    return cursor ? (new SharpC).next(cursor - 1) : new NaturalC;
  }

  twin() {
    return new SharpB;
  }
}

export class SharpC extends Note {
  constructor() {
    super(C, SHARP);
  }

  next(cursor = 0) {
    return cursor ? (new NaturalD).next(cursor - 1) : new SharpC;
  }

  twin() {
    return new FlatD;
  }
}

export class FlatD extends Note {
  constructor() {
    super(D, FLAT);
  }

  next(cursor = 0) {
    return cursor ? (new NaturalD).next(cursor - 1) : new FlatD;
  }

  twin() {
    return new SharpC;
  }
}

export class NaturalD extends Note {
  constructor() {
    super(D, NATURAL);
  }

  next(cursor = 0) {
    return cursor ? (new SharpD).next(cursor - 1) : new NaturalD;
  }

  twin() {
    return null;
  }
}

export class SharpD extends Note {
  constructor() {
    super(D, SHARP);
  }

  next(cursor = 0) {
    return cursor ? (new NaturalE).next(cursor - 1) : new SharpD;
  }

  twin() {
    return new FlatE;
  }
}

export class FlatE extends Note {
  constructor() {
    super(E, FLAT);
  }

  next(cursor = 0) {
    return cursor ? (new NaturalE).next(cursor - 1) : new FlatE;
  }

  twin() {
    return new SharpD;
  }
}

export class NaturalE extends Note {
  constructor() {
    super(E, NATURAL);
  }

  next(cursor = 0) {
    return cursor ? (new NaturalF).next(cursor - 1) : new NaturalE;
  }

  twin() {
    return new FlatF;
  }
}

export class SharpE extends Note {
  constructor() {
    super(E, SHARP);
  }

  next(cursor = 0) {
    return cursor ? (new SharpF).next(cursor - 1) : new SharpE;
  }

  twin() {
    return new NaturalF;
  }
}

export class FlatF extends Note {
  constructor() {
    super(F, FLAT);
  }

  next(cursor = 0) {
    return cursor ? (new NaturalF).next(cursor - 1) : new FlatF;
  }

  twin() {
    return new NaturalE;
  }
}

export class NaturalF extends Note {
  constructor() {
    super(F, NATURAL);
  }

  next(cursor = 0) {
    return cursor ? (new SharpF).next(cursor - 1) : new NaturalF;
  }

  twin() {
    return new SharpE;
  }
}

export class SharpF extends Note {
  constructor() {
    super(F, SHARP);
  }

  next(cursor = 0) {
    return cursor ? (new NaturalG).next(cursor - 1) : new SharpF;
  }

  twin() {
    return new FlatG;
  }
}

export class FlatG extends Note {
  constructor() {
    super(G, FLAT);
  }

  next(cursor = 0) {
    return cursor ? (new NaturalG).next(cursor - 1) : new FlatG;
  }

  twin() {
    return new NaturalF;
  }
}

export class NaturalG extends Note {
  constructor() {
    super(G, NATURAL);
  }

  next(cursor = 0) {
    return cursor ? (new SharpG).next(cursor - 1) : new NaturalG;
  }

  twin() {
    return null;
  }
}

export class SharpG extends Note {
  constructor() {
    super(G, SHARP);
  }

  next(cursor = 0) {
    return cursor ? (new NaturalA).next(cursor - 1) : new SharpG;
  }

  twin() {
    return new FlatA;
  }
}
