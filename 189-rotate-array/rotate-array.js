/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var n = nums.length;
    k = k % n;
    nums.reverse()

    function rev(nums, start,end){
        while(start < end){
            [nums[start], nums[end]]= [nums[end],nums[start]];
            start++;
            end--;
        }
    }

    rev(nums,0,k-1);
    rev(nums,k,n-1);
 
    
};