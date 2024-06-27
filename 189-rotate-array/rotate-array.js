/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 function swap(i,j,nums){
    while(i<j){
        [nums[i],nums[j]] = [nums[j],nums[i]];
        i++;
        j--;
    }
    return nums;
 }
var rotate = function(nums, k) {
    var n = nums.length;
     var k = k % n;
    if(nums.length ==1){
        return;
    }
    
    nums = nums.reverse();

    swap(0,k-1,nums);
    swap(k,nums.length-1,nums)


};