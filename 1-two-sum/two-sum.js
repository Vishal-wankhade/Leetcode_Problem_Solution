/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
      var map = new Map();

    for(var i = 0; i < nums.length; i++){

        let value = nums[i]
        let  pair = target-value;

        if(map.has(pair)){
            return [map.get(pair),i];
        }
        else{
            map.set(value , i)
        }
    }
    
};