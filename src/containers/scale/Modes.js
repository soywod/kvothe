import React from 'react';
import { connect } from 'react-redux';

import { getNoteInstance } from '../../models/Note.class';
import { ScaleModesComponent } from '../../components/scale/Modes';
import { setNoteName, setNoteAlt } from '../../actions/note';
import { selectScaleName } from '../../actions/scale';
import * as Scale from '../../models/Scale.const';
import * as Alt from '../../models/Alt.const';

const mapStateToProps = (_, props) => {
	const note            = getNoteInstance(props.params.noteName, props.params.noteAlt);
	const formulaRef      = Scale.FORMULA[props.params.scaleName];
	const allFormulaModes = buildAllFormulaModes(formulaRef);
	const allScales       = allFormulaModes.map(formula => buildScale(note, formula));
	
	return {
		noteName : props.params.noteName,
		noteAlt  : props.params.noteAlt,
		scaleName: props.params.scaleName,
		scales   : allScales
	};
};

const mapDispatchToProps = (dispatch, props) => {
	dispatch(setNoteName(props.params.noteName));
	dispatch(setNoteAlt(props.params.noteAlt));
	dispatch(selectScaleName(props.params.scaleName));
	
	return {};
};

const buildAllFormulaModes = formula => {
	return formula.map((interval, index) => tweakFormula(formula, index))
};

const tweakFormula = (formula, index) => {
	const intervalRef = formula[index];
	
	return formula
		.map(interval => Math.abs(interval - intervalRef + 12) % 12)
		.sort((a, b) => a > b);
};

const buildScale = (note, formula) => {
	let scale = [];
	
	for (let interval of formula) {
		scale.push(note.next(interval))
	}
	
	return optimizeScale(scale);
};

const optimizeScale = (scaleRef) => {
	const firstResults = [];
	const lastResults  = [];
	let cursor         = 1;
	
	for (let bit = 0; bit <= Math.pow(2, scaleRef.length); bit++) {
		const currentScale = scaleRef.map((note, index) => {
			const currentBit = Math.pow(2, index);
			return ((bit & currentBit) === currentBit ? note.twin() || note : note);
		});
		
		if (isAValidScale(currentScale)) {
			firstResults.push(currentScale);
		}
	}
	
	for (let scale of firstResults) {
		const firstNoteSame = (scale[0].name === scaleRef[0].name);
		let hasNoDuplicates = true;
		
		for (let index = 0; index < scale.length; index++) {
			const note = scale[index];
			
			if (scale.some((currNote, currIndex) => index !== currIndex && note.name === currNote.name)) {
				hasNoDuplicates = false;
				break;
			}
		}
		
		if (firstNoteSame && hasNoDuplicates) {
			return scale;
		}
		else if (hasNoDuplicates) {
			lastResults.unshift(scale);
		}
		else if (firstNoteSame) {
			lastResults.push(scale);
		}
	}
	
	return lastResults[0];
};

const isAValidScale = scale => {
	let index = 0;
	
	for (; index < scale.length; index++) {
		const note           = scale[index];
		const hasInvalidAlts = scale.some((currNote, currIndex) => (
			currNote.alt === Alt.FLAT && note.alt === Alt.SHARP ||
			currNote.alt === Alt.SHARP && note.alt === Alt.FLAT
		));
		
		if (hasInvalidAlts) {
			return false;
		}
	}
	
	return true;
};

export const ScaleModesContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ScaleModesComponent);
