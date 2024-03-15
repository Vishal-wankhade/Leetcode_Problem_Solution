/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    var map = new Map();
    map.set(0,1);

    var count = 0;
    var removal = 0;
    var prefixSum = 0;

    for(var i =0; i < nums.length; i++){
        prefixSum += nums[i]

        removal = prefixSum - k;

        if(map.has(removal)){
            count += map.get(removal);
        }

       map.set(prefixSum , (map.get(prefixSum) || 0) + 1);

    }
    return count;
    
};