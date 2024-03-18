/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {

var n = points.length;

    if(n === 0 )return 0;

    points = points.sort((a,b) => a[1] - b[1])
    console.log(points)
    var end = points[0][1];
    console.log(end)

    var arrow = 1;


    for(var i = 1; i < n; i++){
        if(points[i][0] > end ){
            arrow++;
            end = points[i][1];
        }
    }

    return arrow;

};