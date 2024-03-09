/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
     var map = new Map();
  var ans = [];

  for(var i= 0; i< strs.length; i++){
      var cur = strs[i].split("").sort().join('');
      if(map.has(cur)){
          ans[map.get(cur)].push(strs[i]);
      }else{
          map.set(cur, ans.length);
          ans.push([strs[i]]);
      }
  }
  return ans;
};