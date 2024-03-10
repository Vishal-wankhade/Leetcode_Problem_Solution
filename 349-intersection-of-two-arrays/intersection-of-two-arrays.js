/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    var arr = nums1.length > nums2.length ? nums2 : nums1;
    var arr2 = nums1.length > nums2.length ? nums1 : nums2;

    var ans = [];


    for(var i = 0; i < nums2.length; i++){

        if(arr2.includes(arr[i]) && !ans.includes(arr[i])){
            ans.push(arr[i]);
        }
    }

    return ans


    
};