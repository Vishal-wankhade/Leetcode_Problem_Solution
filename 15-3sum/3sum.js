/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

var ans = [];
 nums = nums.sort((a,b) => a - b)
var target = 0;
var n = nums.length;



for(var i = 0; i < n - 2; i++){
    var left = i + 1;
    var right = n - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while(left < right){
      var sum = nums[i] + nums[left] + nums[right];
      if(sum === target){
        ans.push([nums[i] ,nums[left], nums[right]]);

      while(nums[left] === nums[left + 1]) left++;
      while(nums[right] === nums[right - 1]) right--;

      left++;
      right--;

      }else if(sum > target){
        right--;
      }else{
        left++;
      }
    }
}

   return ans; 
};