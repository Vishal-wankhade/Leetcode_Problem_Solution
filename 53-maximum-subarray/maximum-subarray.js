/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    if(nums.length === 1){
        return nums[0]
    }
    let max = -Infinity;

    let sum = 0;

    for(let i = 0; i < nums.length; i++){
          
       sum = Math.max(nums[i], sum+nums[i]);

       max = Math.max(sum, max);

      
    }
    return max;
};