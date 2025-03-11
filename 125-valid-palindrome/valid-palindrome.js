/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    // var str = s.replace(/[^a-z^A-Z0-9+]/g, '').toLowerCase().split("").reverse().join("");
    

    // return str == s.replace(/[^a-z^A-Z0-9+]/g, '').toLowerCase();

     var str = s.replace(/[^a-z^A-Z0-9+]/g, '').toLowerCase();

   var start = 0;
   var end = str.length-1;

   while(start <= end){
    console.log(str[start])
    console.log(str[end])

    if(str[start] != str[end]){
    
        return false;
    }
    start++;
    end--;
   }
   return true;

    
};