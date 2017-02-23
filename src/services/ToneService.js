import { Tone } from '../types/Tone';
import { Note } from '../types/Note';
import { Alteration } from '../types/Alteration';

// One byte for each notes existing in the standard music system (12 bytes)
const FULL_SCALE = parseInt(111111111111, 2);

const SCALE_7M = parseInt(100000000000, 2);
const SCALE_7m = parseInt(10000000000, 2);
const SCALE_6M = parseInt(1000000000, 2);
const SCALE_6m = parseInt(100000000, 2);
const SCALE_A5 = parseInt(100000000, 2);
const SCALE_P5 = parseInt(10000000, 2);
const SCALE_d5 = parseInt(1000000, 2);
const SCALE_P4 = parseInt(100000, 2);
const SCALE_3M = parseInt(10000, 2);
const SCALE_3m = parseInt(1000, 2);
const SCALE_2M = parseInt(100, 2);
const SCALE_2m = parseInt(10, 2);
const SCALE_P1 = parseInt(1, 2);

const MAJOR_SCALE = SCALE_P1 | SCALE_2M | SCALE_3M | SCALE_P4 | SCALE_P5 | SCALE_6M | SCALE_7M;

function *buildScale(firstTone) {
    let currentTone = firstTone;
    let isCurrentToneAlreadyTaken = false;
    let scale = [];

    while (true) {
        switch (currentTone.note) {
            case 'A': {
                isCurrentToneAlreadyTaken = scale.some(tone => tone.note === currentTone.note);
                switch (currentTone.alteration) {
                    case 'FLAT': {
                        currentTone = new Tone('A', 'NATURAL');
                        scale = yield currentTone;
                        break;
                    }

                    case 'NATURAL': {
                        currentTone = (isCurrentToneAlreadyTaken ? new Tone('B', 'FLAT') : new Tone('A', 'SHARP'));
                        scale = yield currentTone;
                        break;
                    }

                    case 'SHARP': {
                        currentTone = new Tone('B', 'NATURAL');
                        scale = yield currentTone;
                        break;
                    }
                }
                break;
            }

            case 'B': {
                isCurrentToneAlreadyTaken = scale.some(tone => tone.note === currentTone.note);
                switch (currentTone.alteration) {
                    case 'FLAT': {
                        currentTone = (isCurrentToneAlreadyTaken ? new Tone('C', 'FLAT') : new Tone('B', 'NATURAL'));
                        scale = yield currentTone;
                        break;
                    }

                    case 'NATURAL': {
                        currentTone = (isCurrentToneAlreadyTaken ? new Tone('C', 'NATURAL') : new Tone('B', 'SHARP'));
                        scale = yield currentTone;
                        break;
                    }

                    case 'SHARP': {
                        currentTone = new Tone('C', 'SHARP');
                        scale = yield currentTone;
                        break;
                    }
                }
                break;
            }

            case 'C': {
                isCurrentToneAlreadyTaken = scale.some(tone => tone.note === currentTone.note);
                switch (currentTone.alteration) {
                    case 'FLAT': {
                        currentTone = new Tone('C', 'NATURAL');
                        scale = yield currentTone;
                        break;
                    }

                    case 'NATURAL': {
                        currentTone = (isCurrentToneAlreadyTaken ? new Tone('D', 'FLAT') : new Tone('C', 'SHARP'));
                        scale = yield currentTone;
                        break;
                    }

                    case 'SHARP': {
                        currentTone = new Tone('D', 'NATURAL');
                        scale = yield currentTone;
                        break;
                    }
                }
                break;
            }

            case 'D': {
                isCurrentToneAlreadyTaken = scale.some(tone => tone.note === currentTone.note);
                switch (currentTone.alteration) {
                    case 'FLAT': {
                        currentTone = new Tone('D', 'NATURAL');
                        scale = yield currentTone;
                        break;
                    }

                    case 'NATURAL': {
                        currentTone = (isCurrentToneAlreadyTaken ? new Tone('E', 'FLAT') : new Tone('D', 'SHARP'));
                        scale = yield currentTone;
                        break;
                    }

                    case 'SHARP': {
                        currentTone = new Tone('E', 'NATURAL');
                        scale = yield currentTone;
                        break;
                    }
                }
                break;
            }

            case 'E': {
                isCurrentToneAlreadyTaken = scale.some(tone => tone.note === currentTone.note);
                switch (currentTone.alteration) {
                    case 'FLAT': {
                        currentTone = (isCurrentToneAlreadyTaken ? new Tone('F', 'FLAT') : new Tone('E', 'NATURAL'));
                        scale = yield currentTone;
                        break;
                    }

                    case 'NATURAL': {
                        currentTone = (isCurrentToneAlreadyTaken ? new Tone('F', 'NATURAL') : new Tone('E', 'SHARP'));
                        scale = yield currentTone;
                        break;
                    }

                    case 'SHARP': {
                        currentTone = new Tone('F', 'SHARP');
                        scale = yield currentTone;
                        break;
                    }
                }
                break;
            }

            case 'F': {
                isCurrentToneAlreadyTaken = scale.some(tone => tone.note === currentTone.note);
                switch (currentTone.alteration) {
                    case 'FLAT': {
                        currentTone = new Tone('F', 'NATURAL');
                        scale = yield currentTone;
                        break;
                    }

                    case 'NATURAL': {
                        currentTone = (isCurrentToneAlreadyTaken ? new Tone('G', 'FLAT') : new Tone('F', 'SHARP'));
                        scale = yield currentTone;
                        break;
                    }

                    case 'SHARP': {
                        currentTone = new Tone('G', 'NATURAL');
                        scale = yield currentTone;
                        break;
                    }
                }
                break;
            }

            case 'G': {
                isCurrentToneAlreadyTaken = scale.some(tone => tone.note === currentTone.note);
                switch (currentTone.alteration) {
                    case 'FLAT': {
                        currentTone = new Tone('G', 'NATURAL');
                        scale = yield currentTone;
                        break;
                    }

                    case 'NATURAL': {
                        currentTone = (isCurrentToneAlreadyTaken ? new Tone('A', 'FLAT') : new Tone('G', 'SHARP'));
                        scale = yield currentTone;
                        break;
                    }

                    case 'SHARP': {
                        currentTone = new Tone('A', 'NATURAL');
                        scale = yield currentTone;
                        break;
                    }
                }
                break;
            }
        }
    }
}

export function buildMajorScale(tone) {
    let cursor = 1;
    let scale = [];
    let currentTone = tone;
    let isCurrentToneAlreadyTaken = false;

    const gen = buildScale(currentTone);

    for (; cursor <= SCALE_7M; cursor = cursor << 1) {
        if ((cursor & MAJOR_SCALE) > 0) {
            scale.push(currentTone);
        }

        currentTone = gen.next(scale).value;
    }

    return scale;
}
