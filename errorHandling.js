let getDivision = (a, b) => {
    if (b == 0) {
        throw new Error('Invalid Input')
    }
    return a / b;
}
//console.log(getDivision(5, 0));

module.exports = { getDivision };