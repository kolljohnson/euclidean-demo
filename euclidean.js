let euclidRhythm = require('euclidean-rhythms');
require('web-audio-test-api');

export let audioContext = new AudioContext();
export let bassDrum = audioContext.createBuffer(1, 16, 44100);

export function getBeat() {
    return [1, 1, 1, 1]; 
}

