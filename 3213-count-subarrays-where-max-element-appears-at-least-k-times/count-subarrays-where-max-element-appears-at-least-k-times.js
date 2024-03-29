/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {

var max = Math.max(...nums);
var n = nums.length;
var left = 0;
var right = 0;
var count = 0;
var result = 0;

while(right < n){
   if(nums[right] === max){
    count++;
   }

   while(left <=right && count >= k){
    result += n - right;
    if(nums[left] == max){
        count--;
    }
    left++;
   }

   right++;

}
return result;

    
};