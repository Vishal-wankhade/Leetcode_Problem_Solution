/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
     nums.sort((a, b) => a - b);
    let n = nums.length;

    function findNumberOfNums(curNum) {
        let left = 0, right = n - 1;
        let firstIndex = n;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] >= curNum) {
                firstIndex = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return n - firstIndex;
    }

    for (let candidateNumber = 1; candidateNumber <= n; ++candidateNumber) {
        if (candidateNumber === findNumberOfNums(candidateNumber)) {
            return candidateNumber;
        }
    }

    return -1;
};