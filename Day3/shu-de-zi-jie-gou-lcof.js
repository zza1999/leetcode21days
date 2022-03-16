//剑指 Offer 26. 树的子结构(https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/)

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 *
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
    if(A === null || B === null) {return false;}
    return isSame(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

function isSame(A, B) {
    if(B === null) {return true;}
    if(A === null) {return false;}
    return A.val == B.val && isSame(A.left, B.left) && isSame(A.right, B.right);
}