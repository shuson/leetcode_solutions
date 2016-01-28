jest.dontMock('../solutions/235-lca-bTree');

describe('find Lowest Common Ancestor of a Binary Search Tree', function () {
    var find = require('../solutions/235-lca-bTree');

    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }

    it('return 2 when passing [1,2]', function () {
        var root = new TreeNode(2),
            node1 = new TreeNode(1);
        root.left = node1;

        expect(find(root, root, node1).val).toBe(2);
    });

    it('return 4 when passing [1,2,3,4,5]', function () {
        var root = new TreeNode(2),
            node1 = new TreeNode(1),
            node3 = new TreeNode(3),
            node4 = new TreeNode(4),
            node5 = new TreeNode(5);

        root.left = node1;
        root.right = node4;
        node4.left = node3;
        node4.right = node5;

        expect(find(root, node1, node5).val).toBe(2);
    });
});
