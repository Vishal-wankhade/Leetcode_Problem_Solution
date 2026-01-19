/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sellP = prices[0];

    let profit = 0;

    for(let i = 1; i < prices.length; i++){
        if(prices[i] < sellP){
            sellP = prices[i];
        }
        profit = Math.max(profit,(prices[i] - sellP))
    }
    return profit;
};