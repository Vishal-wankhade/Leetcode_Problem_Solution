/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    // var totalSum = (n * (n + 1)) / 2; // Calculate the sum of all integers from 1 to n
    // var leftSum = 1;

    if(n == 1)
    return 1;

    // for (var x = 2; x < n; x++) {
    //     leftSum += x; // Incrementally add x to the left sum
    //     var rightSum = totalSum - leftSum + x;
        
     

    //     if (leftSum === rightSum) {
    //         return x; // Return the pivot integer x if left sum equals right sum
    //     }
    // }

    // return -1; 

   var leftValue = 1;
   var leftSum = 1;

   var rightValue= n;
   var rightSum = n;

   while(leftValue <  rightValue){
     if(leftSum < rightSum){
        leftValue++;
        leftSum += leftValue;
     }
     else{
        rightValue--;
        rightSum += rightValue;
     }

     if(leftSum === rightSum && leftValue + 1 === rightValue - 1){
        return leftValue + 1;
     }

   }

   return -1;

};