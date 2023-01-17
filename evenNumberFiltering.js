const evenNumberInArray = (numbers) => {
    if (!Array.isArray(numbers) || numbers.length == 0) {
        return new Error('Invalid input!');
    }
    return numbers.filter(item => item % 2 == 0);
};
console.log(evenNumberInArray([1, 2, 3, 4, 5, 6, 7]));

module.exports = { evenNumberInArray };