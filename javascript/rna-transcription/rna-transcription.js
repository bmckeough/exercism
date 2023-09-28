//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const transcriptionReducerMaker = (transcriptions) => (transcription, nucleotide) => transcription += transcriptions[nucleotide];

const transcriptionReducer = transcriptionReducerMaker({ 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' });

export const toRna = (dna) => [...dna].reduce(transcriptionReducer, ''); 
