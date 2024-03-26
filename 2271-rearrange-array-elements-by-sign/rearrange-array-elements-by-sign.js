/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {


    var n = nums.length;
    
    var ans = [];

    var odd =1;
    var even = 0//2


for(var i = 0; i<n;i++){

    if(nums[i] > 0){
        ans[even] = nums[i];
        even += 2;
       
    }else{
        ans[odd] =nums[i];
        odd += 2;
        
    }
  
}
    return ans;
    
};