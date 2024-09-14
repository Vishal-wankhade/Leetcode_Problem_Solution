/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    

    var count = 0;

    var major = 0;

    for(var i = 0; i < nums.length; i++){
        if(count == 0){
            count++;
            major = nums[i];
        }else if(major == nums[i]){
            count++;
        }
        else{
            count--;
        }
    }
    return major;
};