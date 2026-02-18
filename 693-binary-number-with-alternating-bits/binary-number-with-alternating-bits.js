/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const bits = [];
    while (n) {
        bits.push(n & 1);
        n >>= 1;
    }
    for (let i = 0; i < bits.length - 1; i++) {
        if (bits[i] === bits[i + 1])
            return false;
    }
    return true;
};