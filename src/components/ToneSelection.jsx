import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { NoteEnum } from '../models/Note.enum';
import { AltEnum } from '../models/Alt.enum';

const style = {
    toneButton     : {
        flex: 1
    },
    harmonizeButton: {
        marginTop: '15px',
        width    : '100%'
    },
    toneButtonGroup: {
        width         : '100%',
        display       : 'flex',
        justifyContent: 'center',
        marginBottom  : '7.5px'
    }
};

const classNames = {
    responsiveCol: 'offset-sm-2 col-sm-8 offset-md-3 col-md-6 offset-xl-4 col-xl-4'
};

export const ToneSelectionComponent = props => (
    <ReactCSSTransitionGroup transitionName="section"
                             transitionEnterTimeout={300}
                             transitionAppear={true}
                             transitionAppearTimeout={300}
                             transitionLeaveTimeout={300}>
        <h1 className="text-center">Choose your tone ♬</h1>

        <br/>

        <div className="row">
            <div className={classNames.responsiveCol}>
                <div className="btn-group" style={style.toneButtonGroup}>
                    {Object.keys(NoteEnum).map(note => (
                        <button key={note}
                                type="button"
                                className={'btn btn-secondary' + (props.note && props.note === note ? ' active' : '')}
                                style={style.toneButton}
                                onClick={() => props.onSelectNote(note)}>
                            {NoteEnum[note]}
                        </button>
                    ))}
                </div>
            </div>

            <div className={classNames.responsiveCol}>
                <div className="btn-group" style={style.toneButtonGroup}>
                    {Object.keys(AltEnum).map(alt => (
                        <button key={alt}
                                type="button"
                                className={'btn btn-secondary' + (props.alt && props.alt === alt ? ' active' : '')}
                                style={style.toneButton}
                                onClick={() => props.onSelectAlt(alt)}>
                            {AltEnum[alt]}
                        </button>
                    ))}
                </div>
            </div>

            <div className={classNames.responsiveCol}>
                <div style={style.buttonGroup}>
                    <button
                        className="btn btn-primary"
                        style={style.harmonizeButton}
                        disabled={!props.ready}
                        onClick={() => props.onHarmonize()}>
                        {props.ready ? `Let's harmonize (${props.tone.toString()})` : 'Waiting for a pick ...'}
                    </button>
                </div>
            </div>
        </div>
    </ReactCSSTransitionGroup>
);

ToneSelectionComponent.propTypes = {
    note : React.PropTypes.string,
    alt  : React.PropTypes.string,
    ready: React.PropTypes.bool,
    tone : React.PropTypes.object,

    onSelectNote: React.PropTypes.func.isRequired,
    onSelectAlt : React.PropTypes.func.isRequired,
    onHarmonize : React.PropTypes.func.isRequired
};
