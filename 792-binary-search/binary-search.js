/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, k) {

    if(arr.length == 1){
        if(arr[0] === k) return 0;
        else {
          return -1
        }
    }
    
    
    var left = 0;
    var right = arr.length-1;
    var mid = 0;
    
    
    while(left <= right){
         mid =  Math.floor((left + right) / 2);
        //  console.log(mid)
        if(arr[mid]!= k){
            if(k > arr[mid]){
                left = mid +1;
            }else{
                right = mid - 1;
            }
        }else{
            return mid;
        }
    }
    
    
    
    
   
    return -1;

};