/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  let answer = [];
  let low = 0;
  let high = S.length;


  for (let i = 0; i < S.length + 1; i++) {
    if (S[i] === 'I') {
      answer[i] = low++;
    } else {
      answer[i] = high--;
    }
  }
  return answer;
};

/*
var diStringMatch = function(S) {
    var bottom = S.split('D').length-1; // this will be our start number
    var top = bottom+1;
    return ('D'+S).split('').map(c => c == 'I' ? top++ : bottom--);
};
*/
