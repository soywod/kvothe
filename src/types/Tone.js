class Note {
    constructor(id, label) {
        this.id = id;
        this.label = label;
    }
}

class Alteration {
    constructor(id, label) {
        this.id = id;
        this.label = label;
    }
}

class Mode {
    constructor(id, label) {
        this.id = id;
        this.label = label;
    }
}

export const NOTES = [
    new Note(0, 'A'),
    new Note(1, 'B'),
    new Note(2, 'C'),
    new Note(3, 'D'),
    new Note(4, 'E'),
    new Note(5, 'F'),
    new Note(6, 'G'),
];

export const ALTERATIONS = [
    new Alteration(0, '♭'),
    new Alteration(1, '♮'),
    new Alteration(2, '♯'),
];

export const MODES = [
    new Mode(0, 'Minor'),
    new Mode(1, 'Major'),
];
