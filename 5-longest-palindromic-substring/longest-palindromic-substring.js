/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

   let max = '';

    const expandAroundCenter = (low, high) => {
        while (low >= 0 && high < s.length && s[low] === s[high]) {
            low--;
            high++;
        }
        return s.slice(low + 1, high); // Extract the valid palindrome
    };

    for (let i = 0; i < s.length; i++) {
        // Odd length palindrome (single center)
        let oddPal = expandAroundCenter(i, i);
        if (oddPal.length > max.length) max = oddPal;

        // Even length palindrome (double center)
        let evenPal = expandAroundCenter(i, i + 1);
        if (evenPal.length > max.length) max = evenPal;
    }

    return max;
    
};