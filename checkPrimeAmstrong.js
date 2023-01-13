function isPrime(n) {
  if (n < 2) {
    return false;
  }
  let c = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      c++;
    }
  }
  if (c == 2) {
    return true;
  }
  return false;
}

function isAmstrong(n) {
  let str = n.toString();
  let l = str.length;
  let s = 0;
  while (n > 0) {
    s += Math.pow(n % 10, l);
    n /= 10;
  }
  if (s == n) {
    return true;
  }
  return false;
}

console.log(isPrime(23));
console.log(isPrime(21));
console.log(isAmstrong(9474));
