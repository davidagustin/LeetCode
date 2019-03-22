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

/*
var peakIndexInMountainArray = function(A) {
  function mid(a,b) {
    return Math.floor((b-a)/2);
  }

  let left = 0, right = A.length-1;
  let pivot = mid(left, right);

  while ( A[pivot-1]>A[pivot] || A[pivot]<A[pivot+1] ) {
    if(A[pivot]>A[pivot+1]) {
      right = pivot;
      pivot = mid(left, right)
    } else {
      left = pivot;
      pivot += mid(left, right)
    }
  }

  return pivot;
};
*/
