/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  for (let i = 0; i < A.length; i ++) {
    A[i] = A[i].reverse();
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[i][j] === 0) {
        A[i][j] = 1;
      } else {
        A[i][j] = 0;
      }

    }
  }

  return A
};

/*
var flipAndInvertImage = function(A) {
    // take each row, reverse it, then map each number in it and invert it. map returns a list
    return A.map(row => row.reverse().map(num => num^1));
};
*/
