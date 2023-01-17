const { getDivision } = require('./errorHandling.js');

describe('Error Handling', () => {
    describe('Divide two numbers', () => {
        it('Should divide the numbers ', () => {
            const result = getDivision(5, 2);
            expect(result).toEqual(2.5);
        });
        it('Should throw an error message', () => {
            expect(() => { getDivision(5, 0); }).toThrow('Invalid Input');
        });
    });
});