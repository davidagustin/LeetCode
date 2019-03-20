/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
  let count = 0;
  let answer = [];
  for (let i = 0; i < d.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] === d[i][count]) {
        count += 1
      }
    }
    if (count === d[i].length) {
      answer.push(d[i])
    }
    count = 0;
  }

  answer.sort((a, b) => {
    return b.length - a.length || a.localeCompare(b)
  });

  if (answer.length === 0) {
    return ""
  } else {
    return answer[0];
  }
};

/*
function findLongestWord2(s, d) {
  d.sort((a, b) => {
    if (a.length !== b.length) {
        return b.length - a.length;
    }
    return a.localeCompare(b);
  });

  for (let word of d) {
    let index = -1;
    for (let c of word) {
      index = s.indexOf(c, index + 1);
      if (index < 0) break;
    }
    if (i >= 0) return word;
  }

  return '';
}
*/
