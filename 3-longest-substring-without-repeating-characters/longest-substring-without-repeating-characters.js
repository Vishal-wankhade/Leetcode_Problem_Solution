/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    var max = 0;
    var l =0;
    var r= 0;
    var map = new Map();



    while(r < s.length){
        if(map.has(s[r])){
           if(map.get(s[r]) >= l){
            l = map.get(s[r]) + 1;
            }
            
        }
        map.set(s[r],r)
        max = Math.max(max,r-l+1);
        r++;

    }

    return max;
};