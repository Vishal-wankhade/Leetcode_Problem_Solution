/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var n = nums.length;
var ans = new Array(n);

var left = 0;
var right = n - 1;

for(var pos = ans.length - 1; pos >= 0;  pos--){
    if (Math.abs(nums[left]) < Math.abs(nums[right])){
        var sqr = nums[right] * nums[right];
        ans[pos] = sqr;
        right--;
    }else{
        var sqr = nums[left] * nums[left];
        ans[pos] = sqr;
       left++;
    }

}
return ans;
};