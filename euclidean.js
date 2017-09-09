let euclidRhythm = require('euclidean-rhythms');
require('web-audio-test-api');

export let audioContext = new AudioContext();
export let bassDrum = audioContext.createBuffer(1, 16, 44100);

export function getBeat() {
    return [1, 1, 1, 1]; 
}

export function getBufferList() {
    let request = new XMLHttpRequest();
    request.open("GET", "sounds/kick.wav", true);
    request.responseType = 'arraybuffer';
    
    request.onload = () => {
	audioContext.decodeAudioData(
	    request.response,
	    function (buffer) {
		if(!buffer) {
		    return;
		}
		let bufferList = [];
		bufferList.push(buffer);
		return bufferList;
	    }
	);
    }

    request.onerror = () => {
	console.log("XHR Error");
    }
    return request.send();
}
