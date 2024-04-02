/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    var map1 = new Map();
    var map2 = new Map();

    if (s.length !== t.length)
        return false;
    
    for(var i =0; i < t.length; i++){
        if(map1.has(s[i])){
            if(map1.get(s[i]) !== t[i]){
                return false;
            }
        }else{
            if(map2.has(t[i]) && map2.get(t[i]) !== s[i]){
                return false;
            }
            map1.set(s[i],t[i]);
            map2.set(t[i],s[i]);
        }
    }
  
    return true;
    
};