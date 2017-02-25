import React from 'react';
import { Link } from 'react-router'

import * as Scale from '../models/Scale';

const style = {
    title   : {
        marginTop: 45
    },
    toneCell: {
        fontSize  : 20,
        marginLeft: 5
    },
    cell    : {
        verticalAlign: 'middle'
    }
};

const classNames = {
    responsiveCol: 'offset-sm-2 col-sm-8 offset-md-3 col-md-6 offset-xl-4 col-xl-4'
};

export const HarmonizationComponent = props => (
    <div>
        <h1>
            <Link to="/"><i className="fa fa-arrow-left"/></Link>
            &nbsp;
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
    </div>
);

const getMajorScale = tone => {
    let cursor                    = Scale.P1;
    let currentTone               = tone;
    let scale                     = [];
    let isCurrentToneAlreadyTaken = false;

    const mainAlt = currentTone.keySignature().length ? currentTone.keySignature()[0].alt : '';

    for (; cursor <= Scale.M7; cursor = cursor << 1) {
        if ((cursor & Scale.MAJOR) > 0) {
            if (
                (mainAlt === 'SHARP' && currentTone.alt === 'FLAT')
                || (mainAlt === 'FLAT' && currentTone.alt === 'SHARP')
                || scale.some(t => t.note === currentTone.note)) {
                currentTone = currentTone.twin() || currentTone;
            }

            scale.push(currentTone);
        }

        currentTone = currentTone.next();
    }

    return scale.map(tone => (
        <span key={tone.note + tone.alt} className="badge badge-primary" style={style.toneCell}>
            {tone.toString()}
        </span>
    ))
};

HarmonizationComponent.propTypes = {
    tone: React.PropTypes.object,
};
