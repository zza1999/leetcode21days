//103. 二叉树的锯齿形层序遍历(https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */

var zigzagLevelOrder = function(root) {
    const ret = [];
    if(!root) {
        return ret;
    }
    let reverse = false;
    const q = [];
    q.push(root);
    while(q.length != 0) {
        const curLevelSize = q.length;
        let level = [];
        for(let i = 0; i < curLevelSize; i++) {
            const node = q.shift();
            level.push(node.val);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        if(reverse) level.reverse();
        ret.push(level);
        reverse = !reverse;
    }
    return ret;
};