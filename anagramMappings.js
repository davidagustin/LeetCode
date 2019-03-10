/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
  let indexArray = [];
  for (let i = 0; i < A.length; i++) {
    indexArray.push(B.indexOf(A[i]));
  }
  return indexArray
};

/*
var anagramMappings = function(A, B) {
      return A.map(num => {
	return B.indexOf(num)
  })
};
*/
