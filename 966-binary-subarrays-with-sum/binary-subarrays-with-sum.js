/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
  var sum = 0;
    var count = 0;

    for(var i = 0; i < nums.length; i++){
        sum = 0;
        sum += nums[i];

        if(sum == goal){
            count++;
        }
        for(var j = i+1; j < nums.length; j++){
            
            sum += nums[j];
         
            if(sum == goal){
                count++;
            }
          
             
        }
    }

    return count;
    
};