//33. 搜索旋转排序数组(https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)

/*
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.trunc((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    if (left > 0 && nums[0] <= target && nums[left - 1] >= target) {
        right = left - 1;
        left = 0;
    } else if (nums[left] <= target && nums[nums.length - 1] >= target) {
        right = nums.length - 1;
    }
    while (left <= right) {
        let mid = Math.trunc((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};