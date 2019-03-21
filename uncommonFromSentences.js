/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  A = A.split(' ');
  B = B.split(' ');
  let counterHashBoth = {};
  let answerArray = [];
  for (let i = 0; i < A.length; i++) {
    counterHashBoth[A[i]] = counterHashBoth[A[i]] + 1 || 1
  }
  for (let i = 0; i < B.length; i++) {
    counterHashBoth[B[i]] = counterHashBoth[B[i]] + 1 || 1
  }

  for (let key in counterHashBoth) {
    if (counterHashBoth[key] === 1) {
      answerArray.push(key);
    }
  }

  return answerArray
};
