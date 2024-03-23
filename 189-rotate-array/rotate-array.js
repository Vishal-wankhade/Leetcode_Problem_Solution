/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {


    function rev(nums,start,end){
        while(start<end){
            [nums[start],nums[end]] = [nums[end],nums[start]]
            start++;
            end--;
        }
    }
var n = nums.length;
  var k = k % n;

  nums = nums.reverse();

  rev(nums,0, k-1);
  rev(nums,k, n-1);





    
};