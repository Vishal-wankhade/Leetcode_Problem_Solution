/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(string) {
    var map = new Map();
    
    var left = 0;
    
    var right = 0;
    var max = 0;
    
    while(right < string.length){
        if(map.has(string[right])){
            if(left <= map.get(string[right])){
                left = map.get(string[right]) + 1;
                map.set(string[right],right);
            }
        }
             map.set(string[right],right);
             max = Math.max(max,(right -left) + 1);
        
       
        right++;
        // console.log(map)
    }
    
    return max;
};