/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {


     arr.sort((a, b) => a - b); // Step 1: Sort the array
    let minDiff = Infinity;
    let ans = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let curDiff = arr[i + 1] - arr[i];

        if (curDiff < minDiff) {
            minDiff = curDiff;
            ans = [[arr[i], arr[i + 1]]]; // Reset result with new min diff pair
        } else if (curDiff === minDiff) {
            ans.push([arr[i], arr[i + 1]]); // Add to result if same min diff
        }
    }

    return ans;
    
};