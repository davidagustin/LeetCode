/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  var count = 0;
  for (let i = 0; i < J.length; i++) {
    for (let j = 0; j < S.length; j++) {
      if (J[i] === S[j]) {
        count++;
      }
    }
  }
  return count;
};

/*
const numJewelsInStones = (J, S) => S.split('').filter(char => J.indexOf(char) !== -1).length;
*/