/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
var slow = nums[0];
        var fast = nums[0];

        // Find the intersection point of the two pointers
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow != fast);

        // Find the entrance of the cycle
        slow = nums[0];
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

        return slow;

};