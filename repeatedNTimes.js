/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  const target = A.length/2
  const hashMap = {};
  for (let i = 0; i < A.length; i++) {
    hashMap[A[i]] = hashMap[A[i]] + 1 || 1
  };

  for (let key in hashMap) {
    if (hashMap[key] === target) {
      return key;
    }
  }
};
/*
var repeatedNTimes = function(A) {
    let set = new Set();

    for(let a of A) {
        if(set.has(a))
            return a;

        set.add(a);
    }
};
*/
