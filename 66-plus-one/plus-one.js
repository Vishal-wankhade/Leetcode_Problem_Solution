/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   var str = BigInt(digits.join(""));
    str++;

    str = str.toString();

    return str.split("");
};