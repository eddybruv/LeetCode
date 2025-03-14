/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let prof = 0;

    let l = 0, r = 1;
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            const temp = prices[r] - prices[l];
            prof = Math.max(temp, prof)
        } else {
            l = r
        }
        r += 1
    }

    return prof
};