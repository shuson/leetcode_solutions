/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;

    return findDepth(root);
};

function findDepth(node) {
    var leftDepth = 1,
        rightDepth = 1;
    if (node.left) {
        leftDepth += findDepth(node.left);
    }

    if (node.right) {
        rightDepth += findDepth(node.right);
    }

    return leftDepth > rightDepth ? leftDepth : rightDepth;
}

module.exports = maxDepth;
