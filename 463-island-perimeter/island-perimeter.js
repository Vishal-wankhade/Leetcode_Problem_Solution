/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {

    var n = grid.length;
    var m = grid[0].length;
    var peri = 0;

    function dfs(grid, i, j){

        if(i < 0 || i >= n || j < 0 || j >= m || grid[i][j] == 0)
        {
            peri++;
            return;
        }

        if(grid[i][j] == -1){
            return;
        }

        grid[i][j] = -1;

        dfs(grid, i+1,j);
        dfs(grid, i-1,j);
        dfs(grid, i,j+1);
         dfs(grid, i,j-1);

    }

    for(var i= 0; i < n; i++){
        for(var j= 0; j < m; j++){
          if(grid[i][j] == 1){
            dfs(grid,i,j);
            return peri;
          }
    }
    }
    return peri;
    
};