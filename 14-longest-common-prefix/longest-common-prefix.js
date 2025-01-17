/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
  strs.sort();

  let first = strs[0];
  let last = strs[strs.length - 1];
  
  var ans = '';

  for(let i = 0; i < Math.min(first.length, last.length); i++){
    if(first[i]  !== last[i]){
        return ans;
    }
    ans += first[i];
  }
  return ans;
};