/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
      var str= x.toString();
    console.log(str)
    var i = 0;
    var j = str.length-1;


    while( i < j){
        if(str[i]!==str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
};