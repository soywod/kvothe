import React from 'react';

import { NoteSelection } from './note/NoteSelection';
import { AlterationSelection } from './alteration/AlterationSelection';
import { ModeSelection } from './mode/ModeSelection';
import { buildMajorScale } from '../../../services/ToneService';
import { Tone } from '../../../types/Tone';
import { style } from './shared/style';
import { Note } from "../../../types/Note";
import { Alteration } from "../../../types/Alteration";
import { Mode } from "../../../types/Mode";

export class ToneSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onSelectNote(note) {
        this.setState({note});
    }

    onSelectAlteration(alteration) {
        this.setState({alteration: alteration});
    }

    onSelectMode(mode) {
        this.setState({mode: mode});
    }

    onHarmonize() {
        const scale = {
            major: buildMajorScale(new Tone(this.state.note, this.state.alteration))
        };

        this.setState({
            harmonized: true,
            scale
        });
    }

    onBack(event) {
        event.preventDefault();

        this.setState({
            note: undefined,
            alteration: undefined,
            mode: undefined,
            harmonized: false
        });
    }

    renderSelection() {
        return (
            <div>
                <h1 className="text-center">Choose your tone</h1>

                <br/>

                <div className="row">
                    <NoteSelection onSelectNote={this.onSelectNote.bind(this)}/>
                    <AlterationSelection onSelectAlteration={this.onSelectAlteration.bind(this)}/>
                    <ModeSelection onSelectMode={this.onSelectMode.bind(this)}/>

                    <div className={style.className.column}>
                        <div style={style.buttonGroup}>
                            <button
                                className="btn btn-primary"
                                style={style.submit}
                                disabled={!this.state.note || !this.state.alteration || !this.state.mode}
                                onClick={this.onHarmonize.bind(this)}>
                                Let's harmonize ♬
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    renderScale(scale) {
        return scale
            .map(tone => Note[tone.note] + (tone.alteration !== 'NATURAL' ? Alteration[tone.alteration] : ''))
            .join(' - ');
    }

    renderHarmonization() {
        return (
            <div>
                <a href="#" onClick={this.onBack.bind(this)}>
                    <i className="fa fa-arrow-left"/> Back
                </a>

                <h1>
                    Tone:
                    &nbsp;
                    {Note[this.state.note]}{this.state.alteration !== 'NATURAL' ? Alteration[this.state.alteration] : ''}
                    &nbsp;
                    {Mode[this.state.mode]}
                </h1>

                <br/>

                <table className="table table-bordered">
                    <thead className="thead-inverse">
                        <tr>
                            <th className="bg-primary">Scale name</th>
                            <th className="bg-primary">Value</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Major scale</td>
                            <td>
                                {this.renderScale(this.state.scale.major)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        return this.state.harmonized ? this.renderHarmonization() : this.renderSelection();
    }
}
