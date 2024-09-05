/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = new Map();

    for(var i = 0; i < nums.length; i++){
        var val = target - nums[i];
        console.log(map.get(val))
        if(map.has(val)){
            return [i,map.get(val)]
        }else{
            map.set(nums[i],i);
        }
    }
};