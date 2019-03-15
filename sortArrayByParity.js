/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  const evensArray = [];
  const oddsArray = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      evensArray.push(A[i])
    } else {
      oddsArray.push(A[i])
    }
  }

  return evensArray.concat(oddsArray);
};

/*
var sortArrayByParity = function(A) {
  return A.sort((a, b) => { return a % 2 - b % 2; });
};
*/
