/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    let n = nums.length;
    let arr = new Array(n);

    let start = 0;
    let end = n-1;

    for(let pos = n-1; pos >=0; pos--){
        if(Math.abs(nums[start]) < Math.abs(nums[end])){
            let sqr = nums[end] * nums[end];
            arr[pos] = sqr;
            end--;
        }else{
            let sqr = nums[start] * nums[start];
            arr[pos] = sqr;
            start++;
        }
    }
    return arr;
};