/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    var count = 0;
    var idx = 0;

    for(var i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            nums[idx] = nums[i];
            idx++;
        }
        count++;
    }

   while(idx < nums.length){
    nums[idx] = 0;
    idx++;
   }
    
};