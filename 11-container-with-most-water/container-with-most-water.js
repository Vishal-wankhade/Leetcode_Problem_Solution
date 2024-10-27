/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    var n = height.length;
    var start = 0;
    var end = n-1;

    var max = -1;

    while(start < end){
        var h = Math.min(height[start], height[end]);

        max = Math.max(max, h * (end - start) );

        if(height[start] < height[end]){
            start++;
        }else{
            end--;
        }
    }
    return max;
};