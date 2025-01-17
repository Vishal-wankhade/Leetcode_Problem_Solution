/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
     let m = matrix.length;
    let n = matrix[0].length;
    
    let x = [];
    let y = [];
    
    
    for(let i =0; i < m; i++){
        for(let j= 0; j < n; j++){
            if(matrix[i][j] == 0){
                x.push(i);
                y.push(j);
            }
        }
    }
    for(let i =0; i < m; i++){
        for(let j= 0; j < n; j++){
            if(x.includes(i) || y.includes(j)){
                matrix[i][j] = 0;
            }
        }
    }
    
    
    return matrix;
};