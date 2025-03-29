/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  
    let n = nums1.length;
    let m = nums2.length;
    let ans = [];

    if(n <= m){

        for(let i = 0; i<n; i++){
           if(nums2.includes(nums1[i]) && !ans.includes(nums1[i])){
            ans.push(nums1[i])
           }
        }
    }else{
         for(let i = 0; i<m; i++){
           if(nums1.includes(nums2[i]) && !ans.includes(nums2[i])){
            ans.push(nums2[i])
           }
        }
    }
    return ans;
};