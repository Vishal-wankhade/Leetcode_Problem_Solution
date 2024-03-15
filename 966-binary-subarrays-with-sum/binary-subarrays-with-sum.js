/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, k) {
//   var sum = 0;
//     var count = 0;

//     for(var i = 0; i < nums.length; i++){
//         sum = 0;
//         sum += nums[i];

//         if(sum == goal){
//             count++;
//         }
//         for(var j = i+1; j < nums.length; j++){
            
//             sum += nums[j];
         
//             if(sum == goal){
//                 count++;
//             }
          
             
//         }
//     }

//     return count;
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