jest.dontMock('../solutions/100-same-tree');

describe('Check two binary tree same or not', function () {
    var isSame = require('../solutions/100-same-tree');

    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }

    it('shows true when given [] and []', function () {
        var p = new TreeNode(1),
            q = new TreeNode(1);

        expect(isSame(p, q)).toBe(true);
    });

    it('shows true when given [1,2,3] and [1,2,3]', function () {
        var p = new TreeNode(0),
            q = new TreeNode(0),
            n1 = new TreeNode(1),
            n2 = new TreeNode(2),
            n3 = new TreeNode(3);
        p.left = n1;
        p.right = n2;
        q.left = n1;
        q.right = n2;
        n2.right = n3;

        expect(isSame(p, q)).toBe(true);
    });
});
