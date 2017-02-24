import React from 'react';
import { Link } from 'react-router'

import { NoteEnum } from '../models/Note.enum';
import { AltEnum } from '../models/Alt.enum';

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
                        {getRelativeMinor(props.tone).toString()}
                    </span>
                </td>
            </tr>
            <tr>
                <td style={style.cell}>Key signature</td>
                <td className="text-right">
                    {getKeySignature(props.tone)}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
);

const getRelativeMinor = tone => {
    return tone.relativeMinor() || tone.twin().relativeMinor();
};

const getKeySignature = tone => {
    const keySignature = tone.keySignature() || tone.twin().keySignature();

    return keySignature.map(t => {
        return (
            <span key={t.note} className="badge badge-primary" style={style.toneCell}>
                {t.toString()}
            </span>
        );
    });
};

HarmonizationComponent.propTypes = {
    tone: React.PropTypes.object,
};
