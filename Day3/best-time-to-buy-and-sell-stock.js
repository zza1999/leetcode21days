//121. 买卖股票的最佳时机(https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

/*
 *
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let n = prices.length;
    let maxPrices = prices[n-1];
    let res = 0;
    for(let i = n-1; i >= 0; i--) {
        if(prices[i] < maxPrices) {
            res = Math.max(maxPrices - prices[i], res);
        } else {
            maxPrices = prices[i];
        }
    }
    return res;
};