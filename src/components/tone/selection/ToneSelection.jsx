import React from 'react';

import { NoteSelection } from './note/NoteSelection';
import { AlterationSelection } from './alteration/AlterationSelection';
import { ModeSelection } from './mode/ModeSelection';
import { tone } from './shared/style';

export class ToneSelection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: null,
            alteration: null,
            mode: null
        };
    }

    onSelectNote(note) {
        this.setState({
            note: note
        });
    }

    onSelectAlteration(alteration) {
        this.setState({
            alteration: alteration
        });
    }

    onSelectMode(mode) {
        this.setState({
            mode: mode
        });
    }

    render() {
        return (
            <div className="row">
                <NoteSelection onSelectNote={this.onSelectNote.bind(this)}/>
                <AlterationSelection onSelectAlteration={this.onSelectAlteration.bind(this)}/>
                <ModeSelection onSelectMode={this.onSelectMode.bind(this)}/>

                <div className={tone.className.column}>
                    <div style={tone.buttonGroup}>
                        <button
                            className="btn btn-primary"
                            style={tone.submit}
                            disabled={!this.state.note || !this.state.alteration || !this.state.mode}>
                            Let's harmonize ♬
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
