/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    var map = new Map();

    map.set('I' ,1);
    map.set('V' ,5);
    map.set('X' ,10);
    map.set('L' ,50);
    map.set('C' ,100);
    map.set('D' ,500);
    map.set('M' ,1000);
    
    var result = 0;

    var n = s.length;
    
    result += map.get(s[n-1]);


    for(var i = n-2; i >=0;  i--){
      if(map.get(s[i]) <map.get(s[i+1])){
        result -= map.get(s[i]);
      }else{
        result += map.get(s[i]);
      }
    }
    
    return result;
};