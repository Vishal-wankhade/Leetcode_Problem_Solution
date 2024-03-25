/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    var ele = 0;

    var count = 0;

    for(var i=0; i < nums.length; i++){
       if(count == 0){
        ele = nums[i];
        count =1;
       }else if(ele == nums[i]){
        count++;
       }else{
        count--;
       }
    }

    return ele;
    
};