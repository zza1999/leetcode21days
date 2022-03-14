# Day 1
### 1. [最大子数组和](https://leetcode-cn.com/problems/maximum-subarray/)
一眼动态规划，维护一个数组dp[n], dp[i]为以第i个数为结尾的子数组的最大和，转移方程为：
$$dp[i] = max\{dp[i-1] + nums[i], nums[i]\}$$
取最大值即可。  
因为$dp[i]$只与$dp[i-1]$有关，所以可以用单一变量来保存$dp[i]$的值，节省空间。

### 2. [反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)
两种方法：递归和迭代。递归不会写，摆了。迭代的话，这种题目最好是动手画画就比较好解决。还有一个技巧就是在头节点前面添加一个空节点，这样反转起来就好理解了。  

### 3. [合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)
这个就比较简单了，递归和迭代都可以，注意边界情况。

### 4. [无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)
滑动窗口的经典题目，通过维护一个hashset来判断是否有重复字符(后来一想用map更好些，还能标记重复字符位置)  
>PS. 得亏之前做过还有点印象，要是指直接做的话可能得写好长时间。。。即使有印象也改了好长时间😅
### 5. [数组中的第K个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)
第一反应是调库😂不过认真写的话就练习了一下快排，至于快排的改进和堆排序感觉用不到就摆了。。。