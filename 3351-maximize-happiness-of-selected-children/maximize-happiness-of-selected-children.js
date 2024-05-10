/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    
    happiness.sort((a,b) => b - a);
    var count = 0;

    var h = 0;
    

    for(var i = 0; i < k; i++){

        h += Math.max(happiness[i] - count, 0);
        count++;

    }
   
   return h;
    
};