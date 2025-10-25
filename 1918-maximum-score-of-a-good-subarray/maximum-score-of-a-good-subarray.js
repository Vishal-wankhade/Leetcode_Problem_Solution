/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    let  l = k; 
    let r = k;
    let curMin = nums[k];
    let len = nums.length;

    let maxScore = curMin;

    while(l > 0 || r < len - 1 ){

        let leftVal = (l > 0) ? nums[l-1] : -Infinity;
        let rightVal = (r < len-1) ? nums[r+1] : -Infinity;

        if(leftVal > rightVal){
            l -= 1;
            curMin = Math.min(curMin, nums[l])
        }else{
            r += 1;
            curMin = Math.min(curMin, nums[r])
        }

        maxScore = Math.max(maxScore, curMin *(r - l + 1))
    }
    return maxScore;
};