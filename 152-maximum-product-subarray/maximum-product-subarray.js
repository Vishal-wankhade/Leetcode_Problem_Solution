/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  var n = nums.length;
       var prod = -Infinity;
       var pref = 1;
       var suf = 1;
       
       
       for(var  i= 0; i < n; i++){
           
           if(pref === 0 ){
               pref = 1; 
           }

           if(suf === 0){
               suf = 1;
           }
           
           pref = pref * nums[i];
           suf = suf * nums[n - i - 1];
           
           prod = Math.max(prod , Math.max(pref , suf));
           
           
       }
       return prod;
    
};