/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //  
   var sum = 0;

   var max = -Infinity;

   for(var i =0; i < nums.length; i++){
      sum += nums[i];

      max = Math.max(max,sum)

      if(sum < 0 ){
        sum = 0;
      }

     
      
   }
   return max;
};