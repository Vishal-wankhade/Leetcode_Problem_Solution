/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    


    let left  = 0;
    let right = height.length - 1;
    let sum = 0;
    for(let i = 0; i< height.length; i++){
       sum += height[i];
    }

    let max = 0;

    while(left < right){

        let curMin =  Math.min(height[left],height[right]);

        max = Math.max(max, curMin*(right - left));

        if(height[left] >= height[right]){
            right--;
        }else{
            left++;
        }
    }
    return max;
};