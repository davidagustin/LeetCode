const gridMaxCheck = (grid, i, j) => {
  let maxNumberRow = 0;
  let maxNumberColumn = 0;
  const gridClone = JSON.parse(JSON.stringify(grid));
  for (let index = 0; index < gridClone.length; index++) {
    if (gridClone[i][index] > maxNumberRow) {
      maxNumberRow = gridClone[i][index];
    }
    if (gridClone[index][j] > maxNumberColumn) {
      maxNumberColumn = gridClone[index][j];
    }
  }
  return Math.abs(Math.min(maxNumberRow, maxNumberColumn) - grid[i][j])
};
/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxIncreaseKeepingSkyline = function (grid) {
  let maxNumber = 0;
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      count += gridMaxCheck(grid, i, j)
    }
  }

  return count;
};

/*
transpose = m => m[0].map((x,i) => m.map(x => x[i]))

var maxIncreaseKeepingSkyline = function(grid) {
    let rowMaxes = grid.map( row => Math.max(...row))
    let colMaxes = transpose(grid).map( row => Math.max(...row))

    let increase = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++){
            let newTotal = Math.min(rowMaxes[i], colMaxes[j])
            increase += newTotal - grid[i][j];
        }
    }
    return increase
};
*/
