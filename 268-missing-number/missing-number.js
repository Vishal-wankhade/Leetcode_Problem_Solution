/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) { 
      const n = nums.length;
    const Tsum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return Tsum - actualSum;
    
};