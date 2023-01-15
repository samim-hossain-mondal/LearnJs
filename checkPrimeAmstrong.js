function isPrime(n) {
  if (n < 2) {
    return false;
  }
  let c = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      c++;
    }
  }
  if (c == 2) {
    return true;
  }
  return false;
}

let prime = (n) => {
  if (n < 2) {
    return false;
  }
  let c = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      c++;
    }
  }
  if (c == 2) {
    return true;
  }
  return false;
};

function isAmstrong(n) {
  let str = n.toString();
  let l = str.length;
  let num = n;
  let s = 0;
  while (num > 0) {
    s += parseInt(Math.pow(num % 10, l));
    num = parseInt(num / 10);
  }
  if (s === n) {
    return true;
  }
  return false;
}

let amstrong = (n) => {
  let str = n.toString();
  let l = str.length;
  let num = n;
  let s = 0;
  while (num > 0) {
    s += parseInt(Math.pow(num % 10, l));
    num = parseInt(num / 10);
  }
  if (s === n) {
    return true;
  }
  return false;
};

module.exports = { isPrime, isAmstrong };
