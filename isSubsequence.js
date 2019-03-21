/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let flag = false;

  function sliceStrings(string1, string2) {
    if (string1.length === 0) {
      flag = true;
    }
    if (string2.indexOf(string1[0]) !== -1) {
      let sliceIndex = string2.indexOf(string1[0]);
      let newString1 = string1.slice(1);
      let newString2 = string2.slice(sliceIndex + 1);
      sliceStrings(newString1, newString2);
    }
  }
  sliceStrings(s, t);
  return flag
};
