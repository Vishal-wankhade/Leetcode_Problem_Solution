/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    var totalSum = (n * (n + 1)) / 2; // Calculate the sum of all integers from 1 to n
    var leftSum = 1;

    if(n == 1)
    return 1;

    for (var x = 2; x < n; x++) {
        leftSum += x; // Incrementally add x to the left sum
        var rightSum = totalSum - leftSum + x;
        
     

        if (leftSum === rightSum) {
            return x; // Return the pivot integer x if left sum equals right sum
        }
    }

    return -1; 
};