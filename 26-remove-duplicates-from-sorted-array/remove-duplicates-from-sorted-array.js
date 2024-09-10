/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var pre = nums[0];
    var count = 1;

    var l = 1;
    var r = 1;

    while(r < nums.length){
        if( pre === nums[r]){
            r++;
        }else{
            nums[l] = nums[r];
            pre = nums[r];
            l++;
            r++;
            count++;
        }
    }
    return count;
    console.log(nums)




};