import React from 'react';

import { style } from '../shared/style';
import { Note } from '../../../../types/Note';

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
        return Object.keys(Note).map(key => {
            return (
                <button key={key}
                        type="button"
                        className={'btn btn-secondary' + (this.state.note && this.state.note === key ? ' active' : '')}
                        style={style.button}
                        onClick={this.onClick.bind(this, key)}>
                    {Note[key]}
                </button>
            );
        });
    }

    render() {
        return (
            <div className={style.className.column}>
                <div className="btn-group" style={style.buttonGroup}>
                    {this.notesTpl()}
                </div>
            </div>
        );
    }
}

NoteSelection.propTypes = {
    onSelectNote: React.PropTypes.func
};