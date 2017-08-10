import { expect } from 'chai';
import { euclid } from '../euclidean.js';

describe('Euclidean Rhythms', () => {
    it('euclid exists', () => {
	expect(euclid()).to.equal(undefined)
    });

    it('has a default 4/4 beat', () => {
	expect(euclid.getBeat()).to.eq([4,4,4,4])
    });
});
