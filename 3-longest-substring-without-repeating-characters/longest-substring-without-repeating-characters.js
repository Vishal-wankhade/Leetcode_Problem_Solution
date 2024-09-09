/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    var map = new Map()

    var max = 0;
    var r = 0;
    var l = 0;



    while(r < s.length){
        if(map.has(s[r])){
            if(l <= map.get(s[r])){
              l = map.get(s[r]) + 1;
            }
            
        }
        
            map.set(s[r] , r)
        

        var len = r - l+1;
            max = Math.max(len,max);
            r++;
    }


  return max;
}