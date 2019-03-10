/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let uniqueMorseWords = new Set;
  let answerString = '';
  const morseAlphabet = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.",
    "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      answerString += morseAlphabet[(words[i].charCodeAt(j) - 97)];
    }
    uniqueMorseWords.add(answerString);
    answerString = ''
  }
  return [...uniqueMorseWords].length
};
