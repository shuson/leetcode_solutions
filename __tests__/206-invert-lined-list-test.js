jest.dontMock('../solutions/206-invert-lined-list');

describe('invert linked list', function () {
    var invert = require('../solutions/206-invert-lined-list');

    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    it('returns [1] when pass [1]', function () {
        var head = new ListNode(1);
        expect(invert(head).val).toEqual(1);
    });

    it('returns [2,1] when pass [1,2]', function () {
        var head = new ListNode(1),
            node1 = new ListNode(2);
        head.next = node1;
        expect(invert(head).val).toEqual(2);
    });

    it('returns [3,2,1] when pass [1,2,3]', function () {
        var head = new ListNode(1),
            node1 = new ListNode(2),
            node2 = new ListNode(3);
        head.next = node1;
        node1.next = node2;
        expect(invert(head).val).toEqual(3);
    });
});
