/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    var max = 0;
    var buy = Infinity;
    
    for(var i =0; i < prices.length; i++){
        if(prices[i] < buy){
            buy = prices[i];
        }
        else{
            var profit = prices[i] - buy;
            max = Math.max(max, profit);
        }
    }
    return max;
};