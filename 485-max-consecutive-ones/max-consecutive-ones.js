/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {

    var count = 0;
    var max = -Infinity;

    for(var i = 0; i<nums.length; i++){
        if(nums[i] == 1){
            count++;
        }
       max = Math.max(max,count);
        

        if(nums[i] != 1){
            count = 0;
        }
       
    }
    return max;
    
};