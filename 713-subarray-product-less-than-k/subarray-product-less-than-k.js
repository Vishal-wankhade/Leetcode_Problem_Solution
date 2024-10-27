/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    
    if( k <= 1){
        return 0;
    }
    var count = 0;
    var i = 0;
    var  j = 0;
    var pro = 1;



    while(j < nums.length){
       pro *= nums[j];
           
         while( pro >= k){
            pro /= nums[i];
            i++;
         }
         count += (j-i+1);
          j++;

      
    }
    return count;
};