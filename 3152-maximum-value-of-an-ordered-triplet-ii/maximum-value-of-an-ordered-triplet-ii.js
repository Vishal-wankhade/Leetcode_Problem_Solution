/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    
    let maxDiff = 0;
    let result = 0;
    let maxi = 0;

    for(let i = 0; i < nums.length; i++){
        result = Math.max(result, maxDiff * nums[i]);
        maxDiff = Math.max(maxDiff, maxi - nums[i]);
        maxi = Math.max(maxi, nums[i]);
        
    }

    return result;
};