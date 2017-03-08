import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { NoteNameContainer } from '../../containers/note/Name';
import { NoteAltContainer } from '../../containers/note/Alt';
import * as Note from '../../models/Note.const';
import * as Alt from '../../models/Alt.const';

const NoteSelectionComponent = props => (
	<ReactCSSTransitionGroup
		transitionName="section"
		transitionEnterTimeout={300}
		transitionAppear={true}
		transitionAppearTimeout={300}
		transitionLeaveTimeout={300}>
		
		<Link to="/">
			<i className="fa fa-arrow-left"/> Back
		</Link>
		
		<h1 className="text-center">
			Pick a note
		</h1>
		
		<br/>
		
		<div style={styles.flexCenter}>
			<NoteNameContainer name={Note.A}/>
			<NoteNameContainer name={Note.B}/>
			<NoteNameContainer name={Note.C}/>
		</div>
		
		<div style={styles.flexCenter}>
			<NoteNameContainer name={Note.D}/>
			<NoteNameContainer name={Note.E}/>
			<NoteNameContainer name={Note.F}/>
		</div>
		
		<div style={styles.flexCenter}>
			<NoteAltContainer alt={Alt.FLAT}/>
			<NoteNameContainer name={Note.G}/>
			<NoteAltContainer alt={Alt.SHARP}/>
		</div>
	
	</ReactCSSTransitionGroup>
);

const styles = {
	flexCenter: {
		display       : 'flex',
		justifyContent: 'center'
	}
};

export default NoteSelectionComponent;
