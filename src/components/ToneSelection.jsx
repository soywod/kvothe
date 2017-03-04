import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { NoteEnum } from '../models/Note.enum';
import { AltEnum } from '../models/Alt.enum';

const styles = {
	flex      : {
		display       : 'flex',
		justifyContent: 'center'
	},
	noteButton: {
		margin        : 3,
		width         : 60,
		height        : 60,
		boxSizing     : 'border-box',
		display       : 'flex',
		justifyContent: 'center',
		alignItems    : 'center'
	}
};

export const ToneSelectionComponent = props => (
	<ReactCSSTransitionGroup
		transitionName="section"
		transitionEnterTimeout={300}
		transitionAppear={true}
		transitionAppearTimeout={300}
		transitionLeaveTimeout={300}>

        <h1 className="text-center">
            Pick a note
        </h1>

        <br/>

        <div style={styles.flex}>
            <button
	            type="button"
	            className={'btn btn-lg btn-secondary' + (props.note === 'A' ? ' active' : '')}
	            style={styles.noteButton}
	            onClick={() => props.onSelectNote('A')}>
                {NoteEnum.A}
	            {props.alt === 'FLAT' ? AltEnum.FLAT : ''}
	            {props.alt === 'SHARP' ? AltEnum.SHARP : ''}
            </button>

            <button
	            type="button"
	            className={'btn btn-lg btn-secondary' + (props.note === 'B' ? ' active' : '')}
	            style={styles.noteButton}
	            onClick={() => props.onSelectNote('B')}>
                {NoteEnum.B}
	            {props.alt === 'FLAT' ? AltEnum.FLAT : ''}
	            {props.alt === 'SHARP' ? AltEnum.SHARP : ''}
            </button>

            <button
	            type="button"
	            className={'btn btn-lg btn-secondary' + (props.note === 'C' ? ' active' : '')}
	            style={styles.noteButton}
	            onClick={() => props.onSelectNote('C')}>
                {NoteEnum.C}
	            {props.alt === 'FLAT' ? AltEnum.FLAT : ''}
	            {props.alt === 'SHARP' ? AltEnum.SHARP : ''}
            </button>
        </div>

        <div style={styles.flex}>
            <button
	            type="button"
	            className={'btn btn-lg btn-secondary' + (props.note === 'D' ? ' active' : '')}
	            style={styles.noteButton}
	            onClick={() => props.onSelectNote('D')}>
                {NoteEnum.D}
	            {props.alt === 'FLAT' ? AltEnum.FLAT : ''}
	            {props.alt === 'SHARP' ? AltEnum.SHARP : ''}
            </button>

            <button
	            type="button"
	            className={'btn btn-lg btn-secondary' + (props.note === 'E' ? ' active' : '')}
	            style={styles.noteButton}
	            onClick={() => props.onSelectNote('E')}>
                {NoteEnum.E}
	            {props.alt === 'FLAT' ? AltEnum.FLAT : ''}
	            {props.alt === 'SHARP' ? AltEnum.SHARP : ''}
            </button>

            <button
	            type="button"
	            className={'btn btn-lg btn-secondary' + (props.note === 'F' ? ' active' : '')}
	            style={styles.noteButton}
	            onClick={() => props.onSelectNote('F')}>
                {NoteEnum.F}
	            {props.alt === 'FLAT' ? AltEnum.FLAT : ''}
	            {props.alt === 'SHARP' ? AltEnum.SHARP : ''}
            </button>
        </div>

        <div style={styles.flex}>
            <button
	            type="button"
	            className={'btn btn-lg ' + (props.alt === 'FLAT' ? 'btn-primary' : 'btn-secondary')}
	            style={styles.noteButton}
	            onClick={() => props.onSelectAlt('FLAT')}>
                {AltEnum.FLAT}
            </button>

            <button
	            type="button"
	            className={'btn btn-lg btn-secondary' + (props.note === 'G' ? ' active' : '')}
	            style={styles.noteButton}
	            onClick={() => props.onSelectNote('G')}>
                {NoteEnum.G}
	            {props.alt === 'FLAT' ? AltEnum.FLAT : ''}
	            {props.alt === 'SHARP' ? AltEnum.SHARP : ''}
            </button>

            <button
	            type="button"
	            className={'btn btn-lg ' + (props.alt === 'SHARP' ? 'btn-primary' : 'btn-secondary')}
	            style={styles.noteButton}
	            onClick={() => props.onSelectAlt('SHARP')}>
                {AltEnum.SHARP}
            </button>
        </div>
    </ReactCSSTransitionGroup>
);

ToneSelectionComponent.propTypes = {
	tone: React.PropTypes.object,
	
	onSelectNote: React.PropTypes.func.isRequired,
	onSelectAlt : React.PropTypes.func.isRequired,
};
