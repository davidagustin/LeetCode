function toBinary(number, amountOfBits = 32) {
  return [...Array(amountOfBits)].map((_x, amountToShift) => (number >> amountToShift) & 1)
}

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let maxBits = (Math.max(x.toString(2).length, y.toString(2).length));
  let binaryX = toBinary(x, maxBits);
  let binaryY = toBinary(y, maxBits);
  let count = 0;

  for (let i = 0; i <= 32; i++) {
    if (binaryX[i] !== binaryY[i]) {
      count++;
    }
  }

  return count;
};

/*
var hammingDistance = function (x, y) {
  return (x ^ y).toString(2).replace(/0/g, '').length;
};
*/
