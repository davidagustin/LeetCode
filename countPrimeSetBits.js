/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

var countPrimeSetBits = function(L, R) {
  let count = 0;
  let binary;
  for (let i = L; i <= R; i += 1) {
    binary = (i).toString(2);
    binary = binary.split('');
    binary = binary.filter((int) => {
      return int === '1'
    });
    binary = binary.map((num) => Number(num))
    binary = binary.reduce((acc, value) => { return acc + value});
    if (isPrime(binary)) {
      count++;
    }
  }
  return count
};
