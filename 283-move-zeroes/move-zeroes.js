/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {


    let i = 0;
    let nz = 0;


    while (i < nums.length){
        if(nums[i] !== 0){
            [nums[i],nums[nz]] = [nums[nz],nums[i]];
            nz++;
        }
        i++;
    }
    
    
};