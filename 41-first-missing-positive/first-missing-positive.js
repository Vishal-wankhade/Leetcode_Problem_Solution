/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {

    var n = nums.length;

    function swap(nums, i , j){
        [nums[i],nums[j]] = [nums[j],nums[i]];
    }

    // for(var i = 0; i < n; i++){
    //     var ele = nums[i];
    //   if(ele > 0  && ele !== nums[ele-1] && ele <= n ){
    //     swap(nums,i,ele-1);
    //     i--;
    //   }

    // }
    // for(var i = 0; i <n; i++){
    //     if(nums[i]!== i+1){
    //         return i+1
    //     }
    // }

    // return n+1;


   for(var i = 0; i< n; i++){
    var ele = nums[i]; 
    if(ele !== nums[ele -1] && ele > 0 && ele <= n){
        swap(nums,i,ele-1);
        i--;
    }
   }
   
    for(var i = 0; i< n; i++){
        if(nums[i] !== i+1){
            return i+1;
        }
    }

    return n+1;
};