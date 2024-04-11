/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {

const n = num.length;
    if (k === n) {
        return "0";
    }

    const stack = [];

    for (let i = 0; i < n; i++) {
        const digit = num.charAt(i);
        while (stack.length > 0 && k > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    let result = stack.join('').replace(/^0+/, '');

    return result === '' ? "0" : result;
    
};