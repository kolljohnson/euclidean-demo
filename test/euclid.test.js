import { expect } from 'chai';
import { getBeat } from '../euclidean.js';

describe('Euclidean Rhythms', () => {
    it('has a default 4/4 beat', () => {
	expect(getBeat()).to.eql([1, 1, 1, 1]);
    });
});
