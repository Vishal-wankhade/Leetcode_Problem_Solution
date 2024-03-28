/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    var n = nums.length;
    var long = 0;

    var max= 0;

    var map = new Map();

    for(var ele of nums){
     map.set(ele,"false");
    }

    for(var i=0; i< n; i++){
       long = 1;
       var nxt = nums[i] +1;
         while(map.has(nxt) && map.get(nxt) === "false"){
            long++;

            map.set(nxt,"true")
            nxt++;

      }
      var pre = nums[i] - 1;
         while(map.has(pre) && map.get(pre) === "false"){
            long++;

            map.set(pre,"true")
            pre--;

      }
      max = Math.max(max,long);

    }

    return max;
    
};