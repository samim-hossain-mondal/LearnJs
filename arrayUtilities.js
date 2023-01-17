const doubleNumbers = (numbers) => {
    if (!Array.isArray(numbers) || numbers.length == 0) {
        throw new Error('Invalid input!');
    }
    return numbers.map(item => item * 2);
};
//console.log(doubleNumbers([]));

module.exports = { doubleNumbers };
