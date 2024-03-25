/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //  
var sum = 0;
var max =-Infinity;
var n = nums.length;

for(var i = 0; i < n; i++){
   
   sum += nums[i];

  if(sum > max){
      max = sum;
  }
   if(sum < 0){
       sum = 0;
   }

  



}

return max;
};