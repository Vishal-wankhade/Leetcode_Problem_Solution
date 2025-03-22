/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let pre = nums[0];

    let count = 1;

    for(let i = 1; i < nums.length; i++){

      if(pre != nums[i]){
      nums[count] = nums[i];
      count++;
      pre = nums[i]
    }
    }

    // if(count != nums.length){
    //     while(count < nums.length){
    //         nums[count] = 0;
    //         count++;
    //     }
    // }
    return count;
};