let euclidRhythm = require('euclidean-rhythms');
require('web-audio-test-api');

export let audioContext = new AudioContext();
export let bassDrum = audioContext.createBuffer(1, 16, 44100);

export function getBeat() {
    return [1, 1, 1, 1]; 
}

export function getBufferList() {
    return new Promise((resolve, reject) => {
	resolve(bassDrum);
	//let request = new XMLHttpRequest();
	//request.responseType = 'arraybuffer';
	//request.open("GET", "sounds/kick.wav", true);    
    
	//request.onload = () => {
	//    request.status === 200 ? resolve(request.response) : reject(Error(request.statusText))
	//}

	//request.onerror = () => {
	//    reject(Error('XHR Error'));
	//}
	//request.send();
    });
}
