/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    if(s == "") return 0;
    let map = new Map();
    let max = -Infinity;

    let left = 0;
    let right = 0;

    while(right < s.length){
        if(map.has(s[right])){
            if(left <= map.get(s[right])){
               left = map.get(s[right]) + 1;
               map.set(s[right],right);
            }
        }
           map.set(s[right],right);
           max = Math.max(max, (right-left)+1)
           right++;
    }
  return max;  
};