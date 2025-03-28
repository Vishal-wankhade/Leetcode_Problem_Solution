/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let map = new Map();


    let left = 0;
    let right = 0;
    let max = 0;

    while (right < s.length) {
        if (map.has(s[right])) {
            if (left <= map.get(s[right])) {
                left = map.get(s[right]) + 1;
            }
        }

        map.set(s[right], right);

        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;
};