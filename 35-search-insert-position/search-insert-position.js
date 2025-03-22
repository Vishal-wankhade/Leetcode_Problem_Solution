/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
 let n = nums.length;

 for(let i = 0; i <n; i++){
    if(nums[i] === target){
        return i;
    }
 }

 if(target > nums[n-1]){
    return n;
 }else if(nums[0]> target){
    return 0;
 }else{
    for(let i = 0; i <n; i++){
        if(nums[i] < target && target < nums[i+1]){
            return i+1;
        }
    }
 }
   
};