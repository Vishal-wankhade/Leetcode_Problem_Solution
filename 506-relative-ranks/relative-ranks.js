/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    

     var sA = score.slice().sort((a, b) => b - a); // Sorting scores in descending order
    var ans = [];
    var map = new Map();

    for(var i = 0; i < sA.length; i++) {
        if (i === 0) {
            map.set(sA[i], "Gold Medal");
        } else if (i === 1) {
            map.set(sA[i], "Silver Medal");
        } else if (i === 2) {
            map.set(sA[i], "Bronze Medal");
        } else {
            map.set(sA[i], (i + 1).toString());
        }
    }

    for(var i = 0; i < score.length; i++) {
        ans[i] = map.get(score[i]);
    }

    return ans;

};