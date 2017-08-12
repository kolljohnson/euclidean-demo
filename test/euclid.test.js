import { expect } from 'chai';
import { audioContext, getBeat } from '../euclidean.js';
import 'web-audio-test-api';

describe('Euclidean Rhythms', () => {
    it('has a default 4/4 beat', () => {
	expect(getBeat()).to.eql([1, 1, 1, 1]);
    });

    it('has an audio context', () => {
	expect(audioContext).to.not.equal(undefined);
    });
});
