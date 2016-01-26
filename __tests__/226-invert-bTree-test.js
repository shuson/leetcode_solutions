jest.dontMock('../solutions/226-invert-bTree');

describe('invert binary tree', function () {
    var invertBTree = require('../solutions/226-invert-bTree');

    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }

    it("return 1 node tree when passing 1 node tree", function () {
        var tree = new TreeNode(0);
        expect(invertBTree(tree).val).toBe(0)
    });

    it("return 3 node tree when passing 3 node tree", function () {
        var tree = new TreeNode(0),
            node1 = new TreeNode(1),
            node2 = new TreeNode(2),
            node3 = new TreeNode(3);
        tree.left = node1;
        tree.right = node2;
        node1.left = node3;

        var inverted = invertBTree(tree);

        expect(inverted.right.right.val).toBe(3)
    });
});
