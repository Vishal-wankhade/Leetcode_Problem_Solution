/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {

    var map =new Map();
    let max = 0;

    for(var num of nums){
       map.set(num , (map.get(num) || 0) + 1 );
       max = Math.max(max, map.get(num));

    }

    count = 0;

   for(var [key , value] of map){
       if(value === max){
           count += value;
       }
   }
return count;

    
    
};