/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {

    let map = new Map();

    for(let ele of nums){
      
        if(map.has(ele)){
            map.set(ele, (map.get(ele) + 1 ))
        }
       else{
        map.set(ele,1)
       }
    }

   let sum = 0;
    for(let [key , value] of map.entries()){
        sum += value;
        if((value % 2 !== 0) || sum % 2 !== 0){
            return false;
        }
    }
    return true;

    console.log(map)
    
};