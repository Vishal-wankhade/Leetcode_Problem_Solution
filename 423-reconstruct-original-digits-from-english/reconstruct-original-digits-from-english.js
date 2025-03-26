/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    let count = new Array(10).fill(0);
    let freq = {};

    // Count frequency of each letter in the given string
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Count numbers based on unique identifiers
    count[0] = freq['z'] || 0;  // zero
    count[2] = freq['w'] || 0;  // two
    count[4] = freq['u'] || 0;  // four
    count[6] = freq['x'] || 0;  // six
    count[8] = freq['g'] || 0;  // eight

    // Count dependent numbers
    count[1] = (freq['o'] || 0) - count[0] - count[2] - count[4];  // one
    count[3] = (freq['h'] || 0) - count[8];  // three
    count[5] = (freq['f'] || 0) - count[4];  // five
    count[7] = (freq['s'] || 0) - count[6];  // seven
    count[9] = (freq['i'] || 0) - count[5] - count[6] - count[8];  // nine

    // Construct the result
    let result = "";
    for (let i = 0; i < 10; i++) {
        result += i.toString().repeat(count[i]);
    }

    return result;

};