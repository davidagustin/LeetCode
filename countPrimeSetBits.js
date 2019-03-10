const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

var countPrimeSetBits = function(L, R) {
  let count = 0;
  let binary;
  for (let i = L; i <= R; i += 1) {
    binary = (i).toString(2);
    binary = binary.split('');
    binary = binary.filter((int) => {
      return int === '1'
    });
    binary = binary.map((num) => Number(num));
    binary = binary.reduce((acc, value) => { return acc + value});
    if (isPrime(binary)) {
      count++;
    }
  }
  return count
};

/*
var countPrimeSetBits = function(L, R) {
  let marks = [ undefined, false, true, true, false, true, false, true, false, false, false, true, false, true, false,
  false, false, true, false, true, false, false, false, true, false, false, false, false, false, true, false, true ];

  let result = 0;
  for (let i = L; i <= R; i++) {
    if (marks[countBits(i)]) result += 1;
  }
  return result;

  // n & (n - 1) 可以消掉最后一个1
  function countBits(n) {
    let result = 0;
    while (n > 0) {
      n &= n - 1;
      result += 1;
    }
    return result;
  }
};
*/
