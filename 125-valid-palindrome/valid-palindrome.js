/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    var str = s.replace(/[^a-z^A-Z0-9+]/g, '').toLowerCase().split("").reverse().join("");
    

    return str == s.replace(/[^a-z^A-Z0-9+]/g, '').toLowerCase();
    
};