jest.dontMock('../solutions/328-oddEven-list');

describe('convert list to odd-even list', function () {
    var oddEven = require('../solutions/328-oddEven-list');

    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    it("returns [1,3,5,2,4] when passing [1,2,3,4,5]", function () {
        var node1 = new ListNode(1),
            node2 = new ListNode(2),
            node3 = new ListNode(3),
            node4 = new ListNode(4),
            node5 = new ListNode(5);
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;

        expect(oddEven(node1).val).toEqual(1);
    });

    it("returns [1,2] when passing [1,2]", function () {
        var node1 = new ListNode(1),
            node2 = new ListNode(2);
        node1.next = node2;

        expect(oddEven(node1).val).toEqual(1);
    });

    it("returns [1,3] when passing [1,3]", function () {
        var node1 = new ListNode(1),
            node3 = new ListNode(3);
        node1.next = node3;

        expect(oddEven(node1).val).toEqual(1);
    });

    it("returns [2,4] when passing [2,4]", function () {
        var node2 = new ListNode(2),
            node4 = new ListNode(4);
        node2.next = node4;

        expect(oddEven(node2).val).toEqual(2);
    });
});
