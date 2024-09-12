/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

   var l = 0;
    var c =0;


    for(var i =0 ; i < nums.length; i++){
      if(nums[i] !== 0){
        nums[l] = nums[i];
        l++;
      }else{
        c++;
      }
    }
    
    if(c== 0) return nums;
    
    for(var i = nums.length - c; i < nums.length; i++){
        nums[i] = 0;
    }
    
    return nums;
    
};