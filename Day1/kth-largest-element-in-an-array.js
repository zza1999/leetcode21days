//215. 数组中的第K个最大元素(https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)

var findKthLargest = function(nums, k) {
    return nums.sort((a, b) => b-a)[k-1]
};