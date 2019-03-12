/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  let startingX;
  let startingY;
  let count = 0;
  let set = new Set;
  let numberOfObstacles = 0;


  let northAndSouth = grid.length;
  let eastAndWest = grid[0].length;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        startingX = i;
        startingY = j;
      }
      if (grid[i][j] === -1) {
        numberOfObstacles++
      }
    }
  }

  let openSquares = grid.length * grid[0].length - numberOfObstacles; // ensure hamiltonian path

  const DFS = (grid, i, j) => {

    if (set.has(`${i}${j}`)) { // prevent repeats from incrementing and decrementing recursive calls
      return
    }

    if (i < 0 || j < 0 || i === northAndSouth || j === eastAndWest) { // out of bounds check
      return
    }

    if (grid[i][j] === -1) { // obstacle found
      return;
    }

    set.add(`${i}${j}`); // mark path

    if (grid[i][j] === 2 && set.size === openSquares) {
      count++
    }

    DFS(grid, i - 1, j);
    DFS(grid, i + 1, j);
    DFS(grid, i, j + 1);
    DFS(grid, i, j - 1);

    set.delete(`${i}${j}`); // back track
  };

  DFS(grid, startingX, startingY);
  return count;
};
