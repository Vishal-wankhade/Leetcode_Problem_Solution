/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let i =0;
    let curSell = prices[0];
    let profit = 0;
    let maxProfit = profit;

    while(i < prices.length){
        if(curSell > prices[i]){
            curSell = prices[i];
        }
        profit = prices[i] - curSell;
        maxProfit = Math.max(maxProfit,profit);
        i++;
    }
    return maxProfit;
};