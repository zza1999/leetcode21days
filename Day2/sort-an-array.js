//912. 排序数组(https://leetcode-cn.com/problems/sort-an-array/)
//写了调库，冒泡，插排，快排

//调库
var sortArray = function(nums) {
    return nums.sort((a,b) => a-b);
};

//冒泡
var sortArray = function(nums) {
    for (let i = nums.length - 1; i >= 0 ; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums;
};

//插排
var sortArray = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        let temp = nums[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (temp >= nums[j]) break;
            nums[j + 1] = nums[j]
        }
        nums[j + 1] = temp;
    }
    return nums;
};

//快排
var sortArray = function(nums) {
    if (nums.length < 2) return nums;
    return  quickSort(nums, 0, nums.length - 1);
};

function quickSort(nums, left, right) {
    if (left >= right) return;
    let pivotIndex = partition(nums, left, right)
    quickSort(nums, left, pivotIndex - 1)
    quickSort(nums, pivotIndex + 1, right)
    return nums;
}

function partition (nums, left, right) {
    let pivot = right;
    let leftIndex = left;
    for (let i = left; i < right; i++) {
        if (nums[i] < nums[pivot]) {
            [nums[leftIndex], nums[i]] = [nums[i], nums[leftIndex]];
            leftIndex++;
        }
    }
    [nums[leftIndex], nums[pivot]] = [nums[pivot], nums[leftIndex]];
    return leftIndex;
}