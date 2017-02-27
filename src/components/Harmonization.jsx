import React from 'react';
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import * as Scale from '../models/Scale';

const style = {
    title: {
        marginTop: 45
    },
    toneCell: {
        fontSize: 20,
        marginLeft: 5
    },
    cell: {
        verticalAlign: 'middle'
    }
};

export const HarmonizationComponent = props => (
    <ReactCSSTransitionGroup transitionName="section"
                             transitionEnterTimeout={0}
                             transitionAppear={true}
                             transitionAppearTimeout={0}
                             transitionLeaveTimeout={0}>

        <h1>
            <Link to="/" className="btn btn-link">
                <i className="fa fa-arrow-left"/>
                BACK
            </Link>
            {' '}
            {props.tone.toString()} harmonization
        </h1>

        <br/>

        <table className="table table-bordered">
            <tbody>
                <tr>
                    <td style={style.cell}>Relative minor</td>
                    <td className="text-right">
                    <span className="badge badge-primary" style={style.toneCell}>
                        {props.tone.relativeMinor().toString()}
                    </span>
                    </td>
                </tr>
                <tr>
                    <td style={style.cell}>Key signature</td>
                    <td className="text-right">
                        {props.tone.keySignature().map(tone => (
                            <span key={tone.note} className="badge badge-primary" style={style.toneCell}>
                            {tone.toString()}
                        </span>
                        ))}
                    </td>
                </tr>
                <tr>
                    <td style={style.cell}>Major scale</td>
                    <td className="text-right">
                        {getMajorScale(props.tone)}
                    </td>
                </tr>
            </tbody>
        </table>
    </ReactCSSTransitionGroup>
);

const getMajorScale = tone => {
    let cursor = Scale.P1;
    let currentTone = tone;
    let scale = [];

    const mainAlt = currentTone.keySignature().length ? currentTone.keySignature()[0].alt : '';

    for (; cursor <= Scale.M7; cursor = cursor << 1) {
        if ((cursor & Scale.MAJOR) > 0) {
            /*
             if (scale.some(t => t.note === currentTone.note)) {
             currentTone = currentTone.twin() || currentTone;
             }

             if (mainAlt === 'SHARP' && currentTone.alt === 'FLAT' || mainAlt === 'FLAT' && currentTone.alt === 'SHARP') {
             currentTone = currentTone.twin() || currentTone;
             }
             */

            scale.push(currentTone);
        }

        currentTone = currentTone.nextSharp();
    }

    return findScale(scale).map(tone => (
        <span key={tone.note + tone.alt} className="badge badge-primary" style={style.toneCell}>
            {tone.toString()}
        </span>
    ))
};

function findScale(scaleToTest) {
    const firstResults = [];
    const lastResults = [];
    let cursor = 1;

    for (let i = 0; i <= Math.pow(2, scaleToTest.length); i++) {
        let tmp = scaleToTest.map((tone, index) => (i & Math.pow(2, index)) === Math.pow(2, index) ? tone.twin() || tone : tone);
        if (isValid(tmp)) {
            firstResults.push(tmp);
        }
    }

    for (let i = 0; i < firstResults.length; i++) {
        const scale = firstResults[i];
        const firstNoteSame = scale[0].note === scaleToTest[0].note;

        let hasNoDuplicates = true;

        for (let j = 0; j < scale.length; j++) {
            const tone = scale[j];

            if (scale.some((t, index) => j !== index && tone.note === t.note)) {
                hasNoDuplicates = false;
                break;
            }
        }

        if (firstNoteSame && hasNoDuplicates) {
            return scale;
        }
        else if (hasNoDuplicates) {
            lastResults.unshift(scale);
        }
        else if (firstNoteSame) {
            lastResults.push(scale);
        }
    }

    return lastResults[0];
}

function isValid(arr) {
    let i = 0;

    while (i < arr.length) {
        if (arr.some((tone, index) => tone.alt === 'FLAT' && arr[i].alt === 'SHARP' || tone.alt === 'SHARP' && arr[i].alt === 'FLAT')) {
            return false;
        }

        i++;
    }

    return true;
}

HarmonizationComponent.propTypes = {
    tone: React.PropTypes.object,

    onBack: React.PropTypes.func.isRequired
};
