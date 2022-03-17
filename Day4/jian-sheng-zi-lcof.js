//剑指 Offer 14- I. 剪绳子(https://leetcode-cn.com/problems/jian-sheng-zi-lcof/)

/*
 *
 * @param {number} n
 * @return {number}
 */

var cuttingRope = function(n) {
    dp = new Array(n+1).fill(0);
    dp[2] = 1;
    for(let i = 2; i <= n; i++) {
        for(let j = 1; j < i; j++) {
            dp[i] = Math.max(Math.max(j*(i-j), j*dp[i-j]), dp[i]);
        }
    }
    return dp[n];
};