/**
 * @param {number[][]} grid
 * @return {number}
 */
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
}

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
var maxIncreaseKeepingSkyline = function(grid) {

    let rowMax = 0;
    let columnMax = 0;
    let columnMaxAll = Array();
    let rowMaxAll = Array();

    let newGrid = grid;
    let sum =0;

    for(let i=0; i < grid.length; i++ ) {


        for(let j = 0; j < grid[i].length; j++ ) {
            if (grid[i][j] > columnMax) {
                columnMax = grid[i][j];
            }

            if(grid[j][i] > rowMax) {
                rowMax = grid[j][i];
            }

        }


        columnMaxAll.push(columnMax);
        columnMax = 0;
        rowMaxAll.push(rowMax);
        rowMax = 0;

    }


    for (let i= 0 ; i< grid.length; i++) {

        for (let j = 0; j < grid.length; j++  ) {
            if(rowMaxAll[i] > columnMaxAll[j] ) {
                sum = sum + columnMaxAll[j] - grid[j][i];
                newGrid[j][i] = columnMaxAll[j];

             }  else {
                sum = sum + rowMaxAll[i] - grid[j][i];
                newGrid[j][i] = rowMaxAll[i];
            }

        }

    }

    return sum;
};
*/
