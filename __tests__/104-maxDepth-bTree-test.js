jest.dontMock('../solutions/104-maxDepth-bTree');

describe('max depth of given binary tree', function () {
    var max = require('../solutions/104-maxDepth-bTree');

    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }

    it('shows 1 when giving 1 node bTree', function () {
        var tree = new TreeNode();
        expect(max(tree)).toBe(1);
    });

    it('shows 7 when giving 6 left nodes to a bTree', function () {
        var node0 = new TreeNode(),
            node1 = new TreeNode(),
            node2 = new TreeNode(),
            node3 = new TreeNode(),
            node4 = new TreeNode(),
            node5 = new TreeNode(),
            tree = new TreeNode();
        tree.left = node0;
        node0.left = node1;
        node1.left = node2;
        node2.left = node3;
        node3.left = node4;
        node4.left = node5;

        expect(max(tree)).toBe(7);
    });

    it('shows 5 when giving 4 left nodes and 2 right nodes to a bTree', function () {
        var node0 = new TreeNode(),
            node1 = new TreeNode(),
            node2 = new TreeNode(),
            node3 = new TreeNode(),
            node4 = new TreeNode(),
            node5 = new TreeNode(),
            tree = new TreeNode();
        tree.left = node0;
        node0.left = node1;
        tree.right = node2;
        node2.left = node3;
        node3.left = node4;
        node4.left = node5;

        expect(max(tree)).toBe(5);
    });
});
