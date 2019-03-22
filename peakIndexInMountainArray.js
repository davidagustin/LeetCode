/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let highestIndex;
  let highestNumber = 0;
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] < A[i]) {
      if (A[i] > highestNumber) {
        highestNumber = A[i];
        highestIndex = i;
      }
    }
  }
  return highestIndex;
};
