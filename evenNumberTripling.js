// Using filter and map
const getTripleOfEvenNumbersFM = (numbers) => {
    if (!Array.isArray(numbers) || numbers.length == 0) {
        return new Error('Invalid input!');
    }
    numbers = numbers.filter(item => item % 2 == 0);
    return numbers.map(item => item * 3);
};
//console.log(getTripleOfEvenNumbersFM([1, 2, 3, 4, 5, 6, 7, 8]));

// Using reduce
const getTripleOfEvenNumbersR = (numbers) => {
    return numbers.reduce((acc, cuu) => {
        if (cuu % 2 === 0) {
            acc.push(cuu * 3);
        }
        return acc;
    }, []);
};
//console.log(getTripleOfEvenNumbersR([1, 2, 3, 4, 5, 6, 7, 8]));

module.exports = { getTripleOfEvenNumbersFM, getTripleOfEvenNumbersR };