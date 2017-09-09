import { expect } from 'chai';
import { audioContext, getBeat, bassDrum, getBufferList } from '../euclidean.js';
import 'web-audio-test-api';

describe('Euclidean Rhythms', () => {
    it('has a default 4/4 beat', () => {
	expect(getBeat()).to.eql([1, 1, 1, 1]);
    });

    it('has an audio context', () => {
	expect(audioContext).to.not.equal(undefined);
    });

    it('has an audio buffer', () => {
	expect(bassDrum).to.be.an.instanceof(global.AudioBuffer);
    });

    it('gets back a buffer list from an AJAX request', () => {
	return Promise.resolve().then(function() {
          setTimeout(function() {
	      let buffer = getBufferList();
	      	expect(buffer.length).to.equal(1);
          }, 0);
	});
    });

    //it('loads a bass drum sample', () => {
    //	let buffer = loadBuffer();
    //	expect(buffer).to.be.an.instanceof(global.AudioBuffer);
    //});
});
