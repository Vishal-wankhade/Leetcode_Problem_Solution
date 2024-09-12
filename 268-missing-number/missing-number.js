/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
 var n = nums.length;
 var totalSum = (n*(n+1))/2;

 var sum = 0;

 for(var i= 0; i< n; i++){
    sum += nums[i];
 }

 return totalSum - sum;
};