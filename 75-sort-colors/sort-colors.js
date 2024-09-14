/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
var mid = 0;
var start = 0;
var end = nums.length-1;
var temp = 0;


while(mid <= end)
{
 if(nums[mid] == 0){
    temp = nums[start];
   nums[start] = nums[mid];
   nums[mid] = temp;
   start++;
   mid++;
 }else if(nums[mid] == 2){
    
    temp = nums[end];
   nums[end] = nums[mid];
   nums[mid] = temp;
   end--;
 }
 else{
   
   mid++;
 }


}
}