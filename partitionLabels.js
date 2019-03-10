const uniqueChars = (string) => {
  const set = new Set;
  for (let i = 0; i < string.length; i++) {
    set.add(string[i]);
  }
  return [...set];
};

/**
 * @param {string} S
 * @return {number[]}
 */
const partitionLabels = function (S) {
  let tupleMinMax = [];
  let answer = [];
  let startSliceIndex = 0;
  let partition = '';
  let greatestSpan;

  const charSet = uniqueChars(S);
  for (let i = 0; i < charSet.length; i++) {
    tupleMinMax.push([S.indexOf(charSet[i]), S.lastIndexOf(charSet[i])]);
  }

  greatestSpan = tupleMinMax[0][1];

  for (let i = 0; i < tupleMinMax.length; i++) {
    if (greatestSpan < tupleMinMax[i][0] && greatestSpan < tupleMinMax[i][1]) {
      partition = S.slice(startSliceIndex, greatestSpan + 1);
      answer.push(partition.length);
      greatestSpan = tupleMinMax[i][1];
      startSliceIndex = tupleMinMax[i][0];
    } else if (greatestSpan > tupleMinMax[i][0] && greatestSpan < tupleMinMax[i][1]) {
      greatestSpan = tupleMinMax[i][1];
    }

    if (i === charSet.length - 1) {
      partition = S.slice(startSliceIndex, greatestSpan + 1);
      answer.push(partition.length);
    }
  }
  return answer
};


/*
var partitionLabels = function(S) {
    const ht = {};
	let results = [];

    for(let i = 0; i < S.length; i++) {
    	if(!ht.hasOwnProperty(S.charAt(i))) {
    		ht[S.charAt(i)] = {min: i, max: i};
    	} else {
    		ht[S.charAt(i)].max = i;
    	}
    }

	for(char in ht) {
		if(!results.length || ht[char].min > results[results.length - 1].max) {
			results.push({min: ht[char].min, max: ht[char].max});
		} else if(ht[char].min < results[results.length - 1].max && ht[char].max > results[results.length - 1].max) {
			 results[results.length - 1].max = ht[char].max
		}
	}

	return results.map(result => {
		return result.max - result.min + 1;
	});
};
*/
