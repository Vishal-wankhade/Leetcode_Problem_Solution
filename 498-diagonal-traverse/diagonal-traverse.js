/**
 * @param {number[][]} mat
 * @return {number[]}
 */

 var findDiagonalOrder = function(mat) {
    var m = mat.length;
    var n = mat[0].length;

    var arr = new Array(n*m);
    var index = 0;

    var row = 0;
    var col = 0;
  var up = true;

    while(col < n && row < m){

        if(up == true){
                 while(row > 0 && col < n -1){
                    arr[index++] = mat[row][col];

                    row--;
                    col++;
                 }
                arr[index++] = mat[row][col];
                if(col == n-1){
                   row++;
                    }
                    else{
                        col++;
                    }
            
        }else{
           while(col > 0 && row < m-1){
                    arr[index++] = mat[row][col];
                   
                    col--;
                     row++;
                 }
                arr[index++] = mat[row][col];
                if(row == m-1){
                   col++;
                    }
                    else{
                    row++;
                    }
        }
        up = !up;
    }
    return arr;
    
};