/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var n = nums.length;

    var lastIdx = 0;
    var coverage = 0;
    var jumps = 0;
    var destination = n-1;

    if(n==1)return 0;

    for(var i= 0; i <n; i++){

        coverage = Math.max(coverage, i + nums[i]);

        if(i == lastIdx){
            lastIdx = coverage;
            jumps++; 

          if(coverage >= destination){
            return jumps;
            }
        }

    }
    return jumps
};