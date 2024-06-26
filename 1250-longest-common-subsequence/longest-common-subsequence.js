/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    var length1 = text1.length;
    var length2 = text2.length;

    var dp = new Array(length1 + 1).fill(0).map(() => new Array(length2 + 1).fill(0));
    var max = 0;

    for (var i = 1; i <= length1; i++) {
        for (var j = 1; j <= length2; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
            max = Math.max(dp[i][j], max);
        }
    }
    return max;
};  