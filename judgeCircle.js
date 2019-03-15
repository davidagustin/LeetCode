/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let vertical = 0;
  let horizontal = 0;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'U') {
      vertical += 1;
    } else if (moves[i] === 'D') {
      vertical -= 1;
    } else if (moves[i] === 'R') {
      horizontal += 1
    } else {
      horizontal -= 1
    }
  }

  return (vertical === 0 && horizontal === 0)
};
