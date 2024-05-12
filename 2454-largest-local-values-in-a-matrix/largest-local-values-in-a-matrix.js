/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {


    function findmax(grid,row,col){
        var maxVal = -Infinity;

        for(var i = row; i <= row+2; i++){
          for(var j = col; j <=col+2; j++){
             maxVal = Math.max(maxVal,grid[i][j]) 
          }
     }
     return maxVal;
    }

    var maxLocal =[];

    for(var row = 0; row < grid.length - 2; row++){
        maxLocal[row] = [];
        for(var col = 0; col < grid[row].length - 2; col++){
          maxLocal[row][col] = findmax(grid,row,col);
      }
    }

    return maxLocal;
    
};