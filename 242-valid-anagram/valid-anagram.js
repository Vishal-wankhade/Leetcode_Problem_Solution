/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    

    var map = new Map()
    
    if(s.length !== t.length){
        return false;
    }
    for(var c of s){
        map.set(c, (map.get(c) + 1 || 1))
    }
    

    for(var c of t){
        if(map.has(c)){
            map.set(c, (map.get(c) - 1))
        }
    }
//   console.log(map)
   for (let value of map.values()) {
    if(value !== 0){
        return false;
    }
}

    return true
};