/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {

    let map = new Map();

    for(let ele of nums){
       map.set(ele, (map.get(ele) || 0) + 1 )
    }

   let sum =0;
    for(let [key , value] of map.entries()){
        sum += value;
        if((value % 2 !== 0) || sum % 2 !== 0){
            return false;
        }
    }
    return true;

    console.log(map)
    
};