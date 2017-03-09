import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NoteNameContainer from '../../containers/mode-builder/NoteName';
import NoteAltContainer from '../../containers/mode-builder/NoteAlt';
import * as Note from '../../models/Note.const';
import * as Alt from '../../models/Alt.const';

const NoteSelectionComponent = props => (
  <div>
		<div className="jumbotron-fluid">
			<h1 className="display-4">
				<i className="fa fa-cubes"/> Mode builder
			</h1>

			<p className="lead">
				This tool builds for you all modes associated to a specific note and a specific scale. <br/>
				Get started by selecting a note bellow :
			</p>
		</div>

		<br/>

		<ReactCSSTransitionGroup
      transitionName="section"
      transitionEnterTimeout={0}
      transitionAppear={true}
      transitionAppearTimeout={0}
      transitionLeaveTimeout={0}>

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
	</div>
);

const styles = {
  flexCenter: {
    display       : 'flex',
    justifyContent: 'center'
  }
};

export default NoteSelectionComponent;
