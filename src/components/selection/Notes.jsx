import React from 'react';

import NoteContainer from '../../containers/selection/Note';
import { style } from '../style';

const NotesComponent = (props) => (
    <div className={style.className.column}>
        <div className="btn-group" style={style.buttonGroup}>
            {props.notes.map(note => <NoteContainer key={note.id} note={note}/>)}
        </div>
    </div>
);

export default NotesComponent;
