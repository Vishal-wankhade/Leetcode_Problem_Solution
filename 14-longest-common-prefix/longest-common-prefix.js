/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    var ans = "";
    strs.sort()
    

    var first = strs[0];
    var last = strs[strs.length-1];

    for(var i = 0; i < Math.min(first.length,last.length); i++){
        if(first[i] !== last[i])
        {
            return ans;
        }
        ans += first[i];
    }


    return ans;
   


    
};