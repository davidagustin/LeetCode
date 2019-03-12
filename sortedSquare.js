/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let squaredArray = [];
  for (let i = 0; i < A.length; i++) {
    squaredArray.push(Math.abs(A[i]) ** 2)
  }

  return squaredArray.sort((a, b) => {
    return a - b
  });
};
