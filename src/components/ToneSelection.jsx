import React from 'react';

import { NOTES, ALTERATIONS, MODES } from '../types/Tone';

const style = {
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '7.5px'
    },
    btnTone: {
        flex: 1,
    },
    btnHarmonize: {
        marginTop: '15px',
        width: '100%'
    }
};

const className = {
    col: 'offset-xl-0 col-xl-12 offset-sm-2 col-sm-8 offset-md-3 col-md-6'
};

export class ToneSelection extends React.Component {
    componentWillMount() {
        this.setState({
            note: null,
            alteration: null,
            mode: null
        });
    }

    selectNote(note) {
        this.setState({
            note: note
        });
    }

    selectAlteration(alteration) {
        this.setState({
            alteration: alteration
        });
    }

    selectMode(mode) {
        this.setState({
            mode: mode
        });
    }

    getNotes() {
        return NOTES.map(note => {
            return (
                <button key={note.id}
                        type="button"
                        className={'btn btn-secondary' + (this.state.note && this.state.note.id === note.id ? ' active' : '')}
                        style={style.btnTone}
                        onClick={this.selectNote.bind(this, note)}>
                    {note.label}
                </button>
            );
        })
    }

    getAlterations() {
        return ALTERATIONS.map(alteration => {
            return (
                <button key={alteration.id}
                        type="button"
                        className={'btn btn-secondary' + (this.state.alteration && this.state.alteration.id === alteration.id ? ' active' : '')}
                        style={style.btnTone}
                        onClick={this.selectAlteration.bind(this, alteration)}>
                    {alteration.label}
                </button>
            );
        })
    }

    getModes() {
        return MODES.map(mode => {
            return (
                <button key={mode.id}
                        type="button"
                        className={'btn btn-secondary' + (this.state.mode && this.state.mode.id === mode.id ? ' active' : '')}
                        style={style.btnTone}
                        onClick={this.selectMode.bind(this, mode)}>
                    {mode.label}
                </button>
            );
        })
    }

    render() {
        return (
            <div className="row">
                <div className={className.col}>
                    <div className="btn-group" style={style.container}>
                        {this.getNotes()}
                    </div>
                </div>

                <div className={className.col}>
                    <div className="btn-group" style={style.container}>
                        {this.getAlterations()}
                    </div>
                </div>

                <div className={className.col}>
                    <div className="btn-group" style={style.container}>
                        {this.getModes()}
                    </div>
                </div>

                <div className={className.col}>
                    <div style={style.container}>
                        <button
                            className="btn btn-primary"
                            style={style.btnHarmonize}
                            disabled={!this.state.note || !this.state.alteration || !this.state.mode}>
                            Let's harmonize ♬
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
