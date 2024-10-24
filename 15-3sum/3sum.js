/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
 var ans = [];
    nums = nums.sort((a, b) => a - b); // Sort array
    var target = 0;
    var n = nums.length;

    for (var i = 0; i < n - 2; i++) {
        // Skip duplicates for 'i'
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        var left = i + 1;
        var right = n - 1;

        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                ans.push([nums[i], nums[left], nums[right]]); // Push the actual triplet

                // Skip duplicates for 'left' and 'right'
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }

    return ans;
};