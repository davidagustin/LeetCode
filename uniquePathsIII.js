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

/*
var uniquePathsIII = function(grid) {
  let res = 0,
    obs = getNumObstacles(grid),
    //calculate total num of squares we need to visit
    totalEmptySquares = grid.length * grid[0].length - obs,
    //track elements we have seen on path
    visited = new Set()

  const traverse = (r, c, path) => {
    let cell = `r-${r} c-${c}`
    if(visited.has(cell)) return

    //out of bounds check
    if(r < 0 || r > grid.length -1 || c < 0 || c > grid[0].length - 1 || grid[r][c] == -1) return false

    //add cell to path
    visited.add(cell)

    //end condition
    if(grid[r][c] == 2 && visited.size == totalEmptySquares) {
      res++
    }

    //up
    traverse(r-1, c, path)

    //down
    traverse(r+1, c, path)

    //left
    traverse(r, c-1, path)

    //right
    traverse(r, c+1, path)

    //backtracking, so remove cell from path
    visited.delete(cell)
  }

  //find starting cell
  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[0].length; col++) {
      if(grid[row][col] == 1) {
        traverse(row, col, [])
      }
    }
  }

  return res
};

function getNumObstacles(grid) {
  let num = 0

  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[0].length; col++) {
      if(grid[row][col] == -1) num++
    }
  }
  return num
}
*/
