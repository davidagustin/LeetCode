function patternCount(word) {
  let charSet = new Set;
  let charAssignment = {};
  let charSetArray;
  let patternString = "";

  for (let i = 0; i < word.length; i++) {
    charSet.add(word[i]);
  }

  charSetArray = [...charSet];

  for (let i = 0; i < charSetArray.length; i++) {
    charAssignment[charSetArray[i]] = i
  }

  for (let i = 0; i < word.length; i++) {
    patternString += charAssignment[word[i]]
  }

  return patternString
}

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  let patternSequence = patternCount(pattern);
  let answer = [];
  let word;
  for (let i = 0; i < words.length; i++) {
    word = words[i];
    if (patternCount(word) === patternSequence) {
      answer.push(word)
    }
  }
  return answer;
};
