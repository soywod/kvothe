import React from 'react';

import { tone } from '../shared/style';
import { notes } from '../../../../types/Tone';

export class NoteSelection extends React.Component {
    componentWillMount() {
        this.setState({
            note: null,
        });
    }

    onClick(note) {
        this.props.onSelectNote(note);
        this.setState({note});
    }

    notesTpl() {
        return notes.map(note => {
            return (
                <button key={note.id}
                        type="button"
                        className={'btn btn-secondary' + (this.state.note && this.state.note.id === note.id ? ' active' : '')}
                        style={tone.button}
                        onClick={this.onClick.bind(this, note)}>
                    {note.label}
                </button>
            );
        })
    }

    render() {
        return (
            <div className={tone.className.column}>
                <div className="btn-group" style={tone.buttonGroup}>
                    {this.notesTpl()}
                </div>
            </div>
        );
    }
}

NoteSelection.propTypes = {
    onSelectNote: React.PropTypes.func
};