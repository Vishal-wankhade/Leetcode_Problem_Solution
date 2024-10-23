/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {


   var left = 0;
    var right = height.length - 1;
    var max = 0;

    while(left < right){
        var h = Math.min(height[left], height[right]);
        var area = h * (right - left);

        max = Math.max(area, max);

        if(height[left] > height[right]){
            right--;
        } else {
            left++;
        }
    }
    return max;
    //  var left = 0;
    // var right = height.length - 1;
    // var max = 0;

    // while(left < right){
    //     var h = Math.min(height[left], height[right]);
    //     var area = h * (right - left);

    //     max = Math.max(area, max);

    //     if(height[left] > height[right]){
    //         right--;
    //     } else {
    //         left++;
    //     }
    // }
    // return max;
};