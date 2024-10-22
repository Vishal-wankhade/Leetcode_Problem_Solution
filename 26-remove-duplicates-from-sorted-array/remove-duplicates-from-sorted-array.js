/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
 if (nums.length === 0) return 0; // edge case: empty array
    
    let i = 1; // pointer for placing the next unique element
    
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[j - 1]) {
            nums[i] = nums[j];
            i++;
        }
    }
    
    return i;



};