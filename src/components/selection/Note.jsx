import React from 'react';

import { style } from '../style';

const NoteComponent = (props) => (
    <button type="button"
            className={'btn btn-secondary' + (props.activeNote.id === props.note.id ? ' active' : '')}
            style={style.button}
            onClick={() => props.onSelectNote(props.id)}>
        {props.note.label}
    </button>
);

export default NoteComponent;
