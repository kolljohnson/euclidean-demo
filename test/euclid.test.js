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
	return getBufferList().then((buffer) => {
	    expect(buffer).to.not.equal(undefined);
	});
    });

    it('loads a sample asynchronously', () => {
	return getBufferList().then((buffer) => {
	    expect(buffer).to.be.an.instanceof(AudioBuffer);
	    expect(buffer.length).to.be.greaterThan(1);
	});
    });
});
