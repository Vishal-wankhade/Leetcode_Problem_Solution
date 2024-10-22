/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = new Map();

//   var ans = [];

  for(var i = 0; i < nums.length; i++){
    var item = target - nums[i];

    if(map.has(item)){
        return [map.get(item),i]
        
    }else{
        map.set(nums[i],i)
    }
  }
  
};