/**
 * @param {number[]} nums
 * @return {number}
 */


 function MaxRobery(arr){

     if (arr.length === 0) return 0;  // Edge case: No houses to rob
    if (arr.length === 1) return arr[0]; 
    
    let dp = new Array(arr.length);

   dp[0] = arr[0];
   dp[1] = Math.max(arr[0],arr[1]);

   for(let i = 2; i < arr.length; i++){
    dp[i] =Math.max(dp[i-2] + arr[i], dp[i-1]);
   }
   return dp[dp.length-1];
 }


var rob = function(nums) {

    if(nums.length < 2){
        return nums[0];
    }

    let skipFirst = new Array(nums.length-1);
    let skipLast = new Array(nums.length-1);

    for(let i = 0; i < nums.length-1; i++){
        skipFirst[i] = nums[i];
        skipLast[i] = nums[i+1];
    }

    let resultSkipFirst = MaxRobery(skipFirst)
    let resultSkipLast = MaxRobery(skipLast)

    return Math.max(resultSkipFirst,resultSkipLast)

    
};