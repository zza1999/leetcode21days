//53. 最大子数组和(https://leetcode-cn.com/problems/maximum-subarray/)

/*
 * @param {number[]} nums
 * @return {number} 
*/

/* 
//未优化空间
var maxSubArray = function(nums) {
    dp = new Array(nums.length);
    dp[0] = nums[0];
    res = dp[0];
    for(let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
        res = Math.max(res, dp[i]);
    }
    return res;
};
*/

//优化空间
var maxSubArray = function(nums) {
    let temp = 0, res = nums[0];
    for(const num of nums) {
        temp = Math.max(temp + num, num);
        res = Math.max(res, temp);
    }
    return res;
};