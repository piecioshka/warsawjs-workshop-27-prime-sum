'use strict';

const { expect } = require('chai');
const { primeSum, sum, isPrime } = require('../src/index');

describe('General', () => {
    it('should work', () => {
        expect(primeSum([])).to.be.equal(0);
    });
    it('primeSum returns number', () => {
        expect(typeof primeSum()).to.be.equal('number');
    });
    it('primeSum returns number', () => {
        expect(primeSum([2, 3, 4, 5])).to.be.equal(10);
    });
});

describe('sum number in array', () => {
    it('sum []', () => {
        expect(sum([])).to.be.equal(0);
    });
    it('sum 1,2', () => {
        expect(sum([1, 2])).to.be.equal(3);
    });
});

describe('check is prime ', () => {
    it('isPrime 2', () => {
        expect(isPrime(2)).to.be.equal(true);
    });
    it('isPrime 4', () => {
        expect(isPrime(6)).to.be.equal(false);
    });
    it('isPrime 4', () => {
        expect(isPrime(0)).to.be.equal(false);
    });
    it('isPrime 4', () => {
        expect(isPrime(1)).to.be.equal(false);
    });
});
