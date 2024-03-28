/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    
  var map = new Map();

  var l = 0; 
  var r = 0;
  var n = nums.length;
  var max = 0;

  while(r < n ){
    map.set(nums[r],(map.get(nums[r]) || 0 )+ 1 );
    

    while(l < r && map.get(nums[r]) > k){
        map.set(nums[l], map.get(nums[l]) - 1);
        l++;
    }
    max = Math.max(max, r-l+1);
    r++;
  }
  return max;
};