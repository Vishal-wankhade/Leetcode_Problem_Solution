/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {

    let set = new Set();

    for(let ele of nums){
       if(set.has(ele)){
        set.delete(ele);
       }else{
        set.add(ele)
       }
    }

  
    return set.size == 0;
};