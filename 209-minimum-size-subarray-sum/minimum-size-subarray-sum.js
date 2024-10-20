/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

      let end = 0;
    let sum = 0;
    let result = Infinity;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        while (sum >= target) {
            result = Math.min(result, i + 1 - end);
            sum -= nums[end];
            end++;
        }
    }

    return result !== Infinity ? result : 0;
    
};