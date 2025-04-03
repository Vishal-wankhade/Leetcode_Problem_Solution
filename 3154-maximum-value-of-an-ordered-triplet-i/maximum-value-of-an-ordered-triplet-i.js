/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    //  let n = nums.length;
    // if (n < 3) return 0;

    // let leftMax = new Array(n).fill(0);
    // leftMax[0] = nums[0];
    // for (let i = 1; i < n; i++) {
    //     leftMax[i] = Math.max(leftMax[i - 1], nums[i]);
    // }

    // let rightMax = new Array(n).fill(0);
    // rightMax[n - 1] = nums[n - 1];
    // for (let i = n - 2; i >= 0; i--) {
    //     rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
    // }

    // let ans = 0;
    // for (let i = 1; i < n - 1; i++) {
    //     let left = leftMax[i - 1];
    //     let right = rightMax[i + 1];
    //     ans = Math.max(ans, (left - nums[i]) * right);
    // }

    // return ans;
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