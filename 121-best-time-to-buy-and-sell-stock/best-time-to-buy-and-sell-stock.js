/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxProfit = 0;

    let curSellDay = prices[0];

    for(let i = 1; i < prices.length; i++){
        if(prices[i] < curSellDay){
            curSellDay = prices[i];
        }else{
            maxProfit = Math.max(maxProfit, prices[i] - curSellDay)
        }
    }
    return maxProfit;
};