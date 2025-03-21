/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    var count = 0;
    var major = 0;

    for(let i = 0; i<nums.length; i++){
        if(count == 0){
            major = nums[i];
            count++;
        }else if(nums[i] == major){
            count++;
        }else{
            count--;
        }
    }
    return major;
    
};