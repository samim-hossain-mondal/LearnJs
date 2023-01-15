const file = require("./checkPrimeAmstrong");
let isPrime = file.isPrime;
let isAmstrong = file.isAmstrong;

const input1 = [9, 2, 13, 14, 31, 52, 3, 103];
const test1 = [false, true, true, false, true, false, true, true];
for (let i = 0; i < input1.length; i++) {
  test("This is a Prime Number", () => {
    expect(isPrime(input1[i])).toBe(test1[i]);
  });
}

const input2 = [7, 197, 12, 407, 17, 9474, 22, 370];
const test2 = [true, false, false, true, false, true, false, true];
for (let i = 0; i < input2.length; i++) {
  test("This is an Amstrong Number", () => {
    expect(isAmstrong(input2[i])).toBe(test2[i]);
  });
}
