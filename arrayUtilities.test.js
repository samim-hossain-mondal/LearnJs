//const { describe, it } = require('node:test');
const { doubleNumbers } = require('./arrayUtilities');

describe('Array Utilities', () => {
    describe('Double numbers', () => {
        it('Should double the elements when the input ', () => {
            const result = doubleNumbers([1, 2, 3]);
            expect(result).toEqual([2, 4, 6]);
        });
        it('Should return error when input is an empty array', () => {
            expect(() => { doubleNumbers([]); }).toThrow('Invalid input!');
        });
    });
});